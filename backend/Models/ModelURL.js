/**
 * @typedef url
 * @type {Object}
 * @property {string} url - an original url
 * @property {string} id - a unique id
 * @property {string} short_url - a shortened url
 * @property {string} created_at - created at timestamp in UTC string
 */

const fs = require("fs");

class URL {
  static FilePath = process.env.FILE_PATH;
  static BaseURL = process.env.BASE_URL;

  /**
   * @static findAll
   * @returns {[url]} URLs
   */
  static findAll() {
    const URLs = fs.readFileSync(URL.FilePath, { encoding: "utf-8" });
    return JSON.parse(URLs);
  }

  /**
   * @static findOne
   * @param {string} id
   * @returns {url} URL
   */
  static findOne(id) {
    const data = URL.findAll().filter((url) => url.id === id)[0];
    return data;
  }

  constructor(url) {
    this.url = url;
    this.id = new Date().valueOf().toString();
    this.short_url = URL.BaseURL + "/" + this.id;
    this.created_at = new Date().toUTCString();
  }

  /**
   * @method save Store a url into the database.
   */
  save() {
    const data = URL.findAll();
    data.push(this);
    fs.writeFileSync(URL.FilePath, JSON.stringify(data));
  }
}

module.exports = URL;

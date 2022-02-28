import axios from "axios";
/**
 * @async
 * @param {Object} param0
 * @param {string} param0.method
 * @param {string} param0.url
 * @param {Object} param0.headers
 * @param {string} param0.headers.contentType
 * @param {Object} param0.data
 * @returns {(Promise<Object>)}
 */
export async function APIRequest({ method, url, headers, data }) {
  const options = {
    method,
    url: process.env.VUE_APP_API_ENDPOINT + url,
    headers: {
      "Content-Type": headers.contentType,
    },
    data,
  };
  return axios.request(options);
}

export default {
  APIRequest,
};

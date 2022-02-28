process.env.VUE_APP_VERSION = require("./package.json").version;
const path = require("path");
const src = "./src";
module.exports = {
  publicPath: "/url-shortener/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, src),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};

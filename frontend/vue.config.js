process.env.VUE_APP_VERSION = require("./package.json").version;
const path = require("path");
const src = "./src";
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/url-shortener/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, src),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};

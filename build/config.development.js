const { merge } = require("webpack-merge");
const { SRC } = require("./paths");

// merge development specific configurations with base configurations
module.exports = merge(require("./config.base.js"), {
  mode: "development",

  // devServer configuration
  devServer: {
    client: {
      // shows a full screen overlay in the browser when there are compiler errors or warnings
      overlay: true,
    },
    static: {
      directory: SRC,
    },
    port: 3000,
    publicPath: "http://localhost:3000/",
    hot: true,
  },
});

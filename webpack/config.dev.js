const { merge } = require("webpack-merge");
const { SRC, ASSETS } = require("./paths.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// merge development specific configurations with base configurations
module.exports = merge(require("./config.common.js"), {
  mode: "development",

  // option to control if and how source maps are generated, in this case it is enabled to track in errors
  devtool: "inline-source-map",

  //simplifies HTML file creation
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development: Expense Tracker",
      favicon: path.join(SRC, "assets/devFavicon.ico"),
    }),
  ],

  // devServer configuration
  devServer: {
    client: {
      // shows a full screen overlay in the browser when there are compiler errors or warnings
      overlay: true,
    },

    static: {
      // directory in which static files are served from by the development server
      directory: ASSETS,
      // public URL path that the browser uses to access static files relative to the server/domain
      publicPath: "/assets/",
    },

    // specification which port to listen for requests
    port: 3000,
  },
});

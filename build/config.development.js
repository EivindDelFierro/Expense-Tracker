const { merge } = require("webpack-merge");
const { SRC, DIST, ASSETS } = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// merge development specific configurations with base configurations
module.exports = merge(require("./config.base.js"), {
  mode: "development",

  // enables source maps in order to track in errors
  devtool: "inline-source-map",

  //simplifies HTML file creation
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development: Expense Tracker",
    }),
  ],

  // devServer configuration
  devServer: {
    client: {
      // shows a full screen overlay in the browser when there are compiler errors or warnings
      overlay: true,
    },
    // serves files from the DIST directory
    static: DIST,
    // port: 3000,
    // publicPath: "http://localhost:3000/",
    // hot: true,
  },
});

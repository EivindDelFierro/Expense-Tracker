const { merge } = require("webpack-merge");
const { DIST } = require("./paths.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// merge development specific configurations with base configurations
module.exports = merge(require("./webpack.config.common.js"), {
  mode: "development",

  // option to control if and how source maps are generated, in this case it is enabled to track in errors
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
  },
});

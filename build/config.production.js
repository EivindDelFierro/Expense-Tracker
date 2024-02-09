const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// merge production specific configurations with base configurations
module.exports = merge(require("./config.base.js"), {
  mode: "production",

  //simplifies HTML file creation
  plugins: [
    new HtmlWebpackPlugin({
      title: "Expense Tracker",
    }),
  ],
});

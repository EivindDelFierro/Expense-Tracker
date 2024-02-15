const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { SRC } = require("./paths.js");
const path = require("path");

// merge production specific configurations with base configurations
module.exports = merge(require("./config.common.js"), {
  mode: "production",

  // Automatically generates an HTML file on bundle creation
  plugins: [
    new HtmlWebpackPlugin({
      title: "Expense Tracker",
      favicon: path.join(SRC, "assets/favicon.ico"),
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});

const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// merge production specific configurations with base configurations
module.exports = merge(require("./config.common.js"), {
  mode: "production",

  //simplifies HTML file creation
  plugins: [
    new HtmlWebpackPlugin({
      title: "Expense Tracker",
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

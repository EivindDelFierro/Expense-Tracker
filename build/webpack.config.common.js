const path = require("path");
const { SRC, DIST, ASSETS } = require("./paths");

module.exports = {
  // webpack configuration for all environments

  // defines where the application starts and where to start bundling files
  entry: {
    bundle: path.resolve(SRC, "index.js"),
  },

  // modules chains are executed in reverse order with webpack expecting the last loader to return JavaScript
  module: {
    rules: [
      // ruleset for processing JSX entries
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|browser_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },

      // ruleset for processing CSS entries
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // "Asset Module" for processing images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      // HTML loader for processing images using html links
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  // configuration settings for webpack bundle output
  output: {
    // destination folder of bundled application
    path: DIST,

    // [name] will be replaced by the entry key, bundle, to create bundle.js
    filename: "[name].js",

    // output path that is seen from the domain
    publicPath: ASSETS,

    // cleans up output folder before each build
    clean: true,
  },
};

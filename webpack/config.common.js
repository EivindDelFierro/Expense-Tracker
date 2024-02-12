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
        options: {
          presets: [
            "@babel/preset-env",
            [
              "@babel/preset-react",
              {
                // "runtime: automatic" enables the use of JSX without importing React into each file. Importing React is still needed to use Hooks or other React specific features.
                runtime: "automatic",
              },
            ],
          ],
        },
      },

      // ruleset for processing CSS then stylesheet entries
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // "Asset Module" for processing images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      // HTML loader for processing html into strings
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

  resolve: {
    // resolves extensions in order. If multiple files share a name, resolves the extension listed first and skips the rest. allows users to leave off expensions when importing. Note: will overide default extensions array unless '...' us tge last entry in the custom definited array.
    extensions: [".js", ".jsx"],
  },
};

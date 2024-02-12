const path = require("path");
const { SRC, DIST } = require("./paths");

module.exports = {
  // webpack configuration for all environments

  // defines where the application starts and where to start bundling files
  entry: {
    bundle: path.resolve(SRC, "index.js"),
  },

  // modules rules and loader/use chains are executed in reverse order with webpack expecting the last loader to return JavaScript
  module: {
    rules: [
      // HTML loader for processing html into strings
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Loaders for processing styles
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // "Asset Module" for processing images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      // Loaders for transpiling ES6 and JSX entries into ES5 JavaScript
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
    ],
  },

  // configuration settings for webpack bundle output
  output: {
    // destination folder of where bundled application is saved
    path: DIST,

    // [name] will be replaced by the entry key, bundle, to create bundle.js
    filename: "[name].js",

    // URL path relative to the server/domain for the output files generated in output.path (e.g. accessing index.html in output.path may be localhost:3000/)
    publicPath: "/",

    // cleans up output folder before each build
    clean: true,
  },

  resolve: {
    // resolves extensions in order. If multiple files share a name, resolves the extension listed first and skips the rest. allows users to leave off expensions when importing. Note: will overide default extensions array unless '...' us tge last entry in the custom definited array.
    extensions: [".js", ".jsx"],
  },
};

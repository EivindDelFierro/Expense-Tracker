const { merge } = require("webpack-merge");
const { DIST } = require("./paths.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// merge development specific configurations with base configurations
module.exports = merge(require("./config.common.js"), {
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

    static: {
      // serves files from the DIST directory
      directory: DIST,
      // serves content from directory at host/publicPath/ in this case "localhost:8080/"
      publicPath: "/",
    },

    // specification which port to listen for requests
    port: 8080,

    open: true,

    // function that is invoked when server begins listening for connections
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error(
          "devServer Initialization error: webpack-dev-server is not defined"
        );
      }

      const port = devServer.server.address().port;
      console.log("devServer listening on port:", port);
    },
  },
});

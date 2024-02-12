const path = require("path");

module.exports = {
  // absolute path to source files
  SRC: path.resolve(__dirname, "..", "src"),

  // absolute path to generated bundles
  DIST: path.resolve(__dirname, "..", "dist"),

  // absolute path to static assets/images/files
  ASSETS: path.resolve(__dirname, "..", "src", "assets"),
};

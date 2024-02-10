const path = require("path");

module.exports = {
  // base path to source files
  SRC: path.resolve(__dirname, "..", "src"),

  // base path to generated bundles
  DIST: path.resolve(__dirname, "..", "dist"),

  // assets resolve to directory where bundle output is generated
  ASSETS: "./",
};

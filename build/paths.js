const path = require("path");

module.exports = {
  // base path to source files
  SRC: path.resolve(__dirname, "..", "src"),

  // base path to generated bundles
  DIST: path.resolve(__dirname, "..", "dist"),

  ASSETS: "/dist",
};

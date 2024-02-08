const { merge } = require("webpack-merge");

// merge production specific configurations with base configurations
module.exports = merge(require("./config.base.js"), {
  mode: "production",
});

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: "errors-only",
  plugins: [
    new DotEnv({
      path: "./dev.env",
    }),
  ],
});

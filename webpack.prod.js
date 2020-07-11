const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "production",
    stats: "verbose",
    plugins: [
        new DotEnv({
            path: "./prod.env"
        })
    ]
})
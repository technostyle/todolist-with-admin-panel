const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  output: {
    filename: "[name].js",
  },
  devServer: {
    port: 3000,
    contentBase: "./src",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
// const prod = process.env.NODE_ENV === "production";

module.exports = {
  // mode: prod ? "production" : "development",
  // devtool: prod ? "hidden-source-map" : "eval",
  entry: "./src/index.tsx",

  // devServer: {
  //   historyApiFallback: true,
  //   port: 3000,
  //   hot: true,
  // },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"],
  },

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};

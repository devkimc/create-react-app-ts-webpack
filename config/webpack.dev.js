const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
  },
  //   output: {
  //     filename: "bundle.js",
  //     publicPath: "/",
  //   },
  // styled-component 를 사용하므로 주석
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(sa|sc|c)ss$/i,
  //         use: ["style-loader", "css-loader", "sass-loader"],
  //       },
  //     ],
  //   },
});

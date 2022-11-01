const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: false,
        hot: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
        liveReload: true,
        // proxy: {
        //   "/api": { target: "http://localhost:9000" },
        // },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});

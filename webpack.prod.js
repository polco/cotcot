const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'index.[hash].js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: 'https://static.cotcot.app'
    },
});

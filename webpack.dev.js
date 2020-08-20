const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080'
    },
});

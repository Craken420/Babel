const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexInput = './src/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash][name].js',
        clean: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: indexOutput,
            template: indexInput
        })
    ]
};

module.exports = webpackInitConfig;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexInput = './src/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash][name].js',
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.ts/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: indexOutput,
            template: indexInput
        })
    ]
};

module.exports = webpackInitConfig;
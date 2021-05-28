const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexInput = './src/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
    entry: {
        app: ['@babel/polyfill', './src/index.ts'],
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
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.ts/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                ],
            },
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
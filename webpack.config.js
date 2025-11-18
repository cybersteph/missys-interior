const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
        },
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg)$/i,
              type: 'asset/resource'
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
    ],
    devtool: 'source-map',
};
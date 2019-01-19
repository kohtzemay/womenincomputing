var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        __dirname + '/app/scripts/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: '/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif)$/, exclude: /node_modules/, loader: "url" }
        ]
    },
    resolve: {
        unsafeCache: true,
        alias: {
            img: path.resolve(__dirname, 'app/img/')
        }
    },
    plugins: [
    	new HtmlWebpackPlugin({template: __dirname + "/app/index.html"}),
    	new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3001,
        proxy: { '/api/*': 'http://localhost:3000' },
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true

    }
};

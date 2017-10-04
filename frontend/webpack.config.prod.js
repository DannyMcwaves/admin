// webpack.config.js
// compiling typescript, react and angular4.

let webpack = require("webpack"),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractCSS = new ExtractTextPlugin("[name].min.css"),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./index.ts",
        vendor: ["./vendors.js", "bootstrap"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader"]
        }, {
            test: /\.ts$/,
            use: ["ts-loader"]
        }, {
            test: /\.css$/,
            loader: extractCSS.extract(["css-loader"])
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader'
             ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.scss$/,
            loader: extractCSS.extract(["css-loader", "sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")])
        }]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        extractCSS,
        new CleanWebpackPlugin(["dist"]),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

module.exports = config;
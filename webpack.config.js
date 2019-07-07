const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output:{
        path: path.join(__dirname,'dist'),
        filename:'bundle.js'
},
 resolve: {
    extensions: [".js"]
},
module: {
    rules: [
    {
        test: /\.(jpe?g|ico|png|gif|svg)$/i,
        loader: 'file-loader?name=img/[name].[ext]'
    },
    {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        })
    }
]
},
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    }),

    new ExtractTextPlugin('style.css'),
    // new UglifyJSPlugin() 
],
devServer: {
    publicPath: "/",
    contentBase: "./dist"
}

};
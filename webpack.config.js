
const webpack = require("webpack"),
        path = require("path"),
        HtmlWebpackPlugin = require("html-webpack-plugin"),
        MiniCssExtractPlugin = require("mini-css-extract-plugin"),
        fileloader = require("file-loader"),
        tailwindcss = require("tailwindcss"),
        autoprefixer = require("autoprefixer");

module.exports = {
    mode: 'production',

    entry: './src/js/app.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {   
                test: /\.js$/i,
                use: {
                    loader: 'babel-loader', 
                    options: { presets: ['@babel/preset-env'] },
                    }
            },

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]  
            },

            {
                test: /\.svg$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[name].[ext]',
                        outputPath: 'svg/'
                    }
                }]  
            },
        ]
    },

    plugins:[
        tailwindcss,
        autoprefixer,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],

    devServer: {
        static: './dist',
        hot: true,
    },

}
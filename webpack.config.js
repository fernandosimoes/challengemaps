const devmode = process.env.NODE_ENV == 'production' ? false : true; 
const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: devmode ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', //adiciona css na dom injetango a tag style
          'css-loader', // interpetra os importas e as urls para imagems referenciadas em arquivos css
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '/assets/img/[name].[ext]',
          context: ''
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',    // where the fonts will go
          publicPath: '../'       // override the default path
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  
  devtool: 'source-map',
  devServer: {
    contentBase: '/dist/',
    port: 9000
  }
};
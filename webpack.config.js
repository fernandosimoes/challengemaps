const devmode = process.env.NODE_ENV == 'production' ? false : true; 
const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: devmode ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin({
      filename: __dirname + '/style.css',
      disable: true,
      allChunks: true
    }),
    
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ca]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              limit: 8192
            }
          }
        ]
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
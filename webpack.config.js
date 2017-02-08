const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

module.exports = {
  entry: "./client/index",
  output: {
    path: path.join(__dirname, './server/public/js'),
    filename: 'bundle.js',
    publicPath: './public/'
  },
  watch: isDevelopment,
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      exclude: [/node_modules/, /public/]
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
      /*loaders: ["style", "css", "sass", "resolve-url"],*/
      exclude: [/node_modules/, /public/]
    }, {
      test: [/\.jsx?$/, /\.es6$/],
      include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'server/shared')
      ],
      exclude: [/node_modules/, /bower_components/],
      /*loaders: ['react-hot-loader', 'babel-loader']*/
      /* loaders: ["babel-loader", "eslint-loader"]*/
      loader: 'babel-loader'
    }, {
      test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000'
    }, {
      test: /\.((ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|otf|eot)$/, loader: 'file'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  },
  devtool: isDevelopment ? 'cheap-module-source-map' : null,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('bundle.css', {
      disable: false
    })
  ]
};

var path = require("path");
var webpack = require("webpack");

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV ==='development';
console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);

module.exports = {
    entry: "./client/index",
    output: {
        path: "./server/public/js",
        filename: "bundle.js"
    },
    watch: isDevelopment,
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader",
            exclude: [/node_modules/, /public/]
        },{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
            exclude: [/node_modules/, /public/]
        },{
            test: [/\.jsx?$/, /\.es6$/],
            include: [
                path.join(__dirname, 'client'),
                path.join(__dirname, 'server/shared')
            ],
            exclude: [/node_modules/, /bower_components/],
            /*loaders: ["babel-loader", "eslint-loader"]*/
            loader: 'babel-loader'
        },{
            test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000'
        },{
            test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file'
        },{
            test: /\.json$/,
            loader: "json-loader"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    node : {
        net: "empty",
        dns: "empty"
    },
    devtool: isDevelopment ? "cheap-module-source-map" : null,
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(NODE_ENV)
        }
      })
    ]
};

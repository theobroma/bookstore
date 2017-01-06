module.exports = {
    entry: "./client/index",
    output: {
        path: "./public/js",
        filename: "bundle.js"
    },
    watch: true,
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
            exclude: [/node_modules/, /bower_components/],
            loader: 'babel-loader'
        },{
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000',
        },{
            test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
        },{
            test: /\.json$/,
            loader: "json-loader"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};

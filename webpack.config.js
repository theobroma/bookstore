module.exports = {
    entry: "./app/index",
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
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        },{
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        },{
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        },{
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        },{
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};

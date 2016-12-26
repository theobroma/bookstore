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
            loader: "style!css"
        },{
             test: [/\.jsx?$/, /\.es6$/],
             exclude: /node_modules/,
             loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
};

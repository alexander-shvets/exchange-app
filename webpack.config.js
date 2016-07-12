module.exports = {
    entry: {
        //index:  './src/app-template.html',
        client: './src/app-client.js',
        server: './src/app-server.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    //devtool: 'source-map'
}

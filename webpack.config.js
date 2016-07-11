// var path = require('path')
// var webpack = require('webpack')

module.exports = {
    entry: './application.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
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

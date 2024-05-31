const path = require('path')
const { library, webpack } = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'InertiaForm',
        libraryTarget: 'umd',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    externals: {
        React: 'react',
        '@inertiajs/react': '@inertiajs/react'
    },
}
const path = require('path');
module.exports = {
    entry: {
        main:'./src/index.js'
    },
    node: {
        fs: 'empty',
        child_process: 'empty'
    },
    module: {
        rules: [
            {
                test: /js?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.css']
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].js'
    }

};
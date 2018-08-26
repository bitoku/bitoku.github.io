const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist/js')
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
};
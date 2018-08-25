const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'js')
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
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.[hash].bundle.js'
    },
    resolve: {
        extensions:['.js', '.png', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/g,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            path: './dist',
            template: "./src/index.template.html"
        })
    ]
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {  // 指定 项目的入口文件
        polyfill: './src/polyfill.js',
        main: './src/main.js',
    },
    output: {  //  // 指定打包的出口文件
        path: __dirname + '/dist',
        filename: '[name].[hash].bundle.js'
    },
    resolve: {  //  指定 文件扩展名, 导入的时候可以忽略扩展名
        extensions: ['.js', '.css', '.png']
    },
    module: {
        rules: [  // 配置 加载器, 加载 非 js 文件
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|bmp)$/g,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),  // 构建前 清理 目录
        new HtmlWebpackPlugin({    // 指明 html 模板
            title: '大家好',
            path: './dist',
            template: './src/index.template.html'
        })
    ]
};

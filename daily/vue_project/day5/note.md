### webpack 安装
- npm init -y

- npm install webpack webpack-cli --save-dev
- npm install webpack webpack-cli --global

- webpack --version

- npm install clean-webpack-plugin --save-dev
- npm install css-loader  --save-dev
- npm install file-loader  --save-dev
- npm install html-webpack-plugin  --save-dev
- npm install style-loader  --save-dev
- webpack --config ./你的webpack配置文件

### webpack 配置文件

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',  // 入口文件
    output: {
        path: __dirname + '/dist',          // path 出口路径
        filename: 'main.[hash].bundle.js'   // filename 出口 文件名
    },
    resolve: {
        extensions:['.js', '.png', '.css']
    },
    module: {  // module 指定 加载器规则 rules
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
        new HtmlWebpackPlugin({  // 指定 html 模板
            path: './dist',
            template: "./src/index.template.html"  
        })
    ]
};

```

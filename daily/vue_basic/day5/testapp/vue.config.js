//  vue 脚手架 服务 转发 前端的请求 到 后端 的 服务器
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.52.66:3000',
                host: '192.168.52.66:3000',
                changeOrigin:true
            }
        }
    }
};

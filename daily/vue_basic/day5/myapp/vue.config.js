module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                host: 'localhost:3000',
                changeOrigin: true
            }
        }
    }
};

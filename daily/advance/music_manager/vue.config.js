module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                host: 'localhost:5000',
                changeOrigin: true
            }
        }
    }
};

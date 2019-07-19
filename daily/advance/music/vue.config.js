module.exports = {
    devServer: {
        proxy: {
            '/music': {
                target: 'http://localhost:5000',
                ws: false,
                changeOrigin: true
            }
        }
    }
}

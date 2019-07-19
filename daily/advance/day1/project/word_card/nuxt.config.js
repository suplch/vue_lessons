module.exports = {
    modules: [
        '@nuxtjs/proxy'
    ],
    axios: {
        proxy: true
    },
    proxy: {
        '/api': {
            target: 'http://localhost:5000',
        }
    },
    head: {
        title: '学习世界',
        titleTemplate: '%s - 我的英语',
        meta: [
            { charset: 'utf-8'},

        ]
    },

    css: [
        '~assets/global.css'
    ]
};

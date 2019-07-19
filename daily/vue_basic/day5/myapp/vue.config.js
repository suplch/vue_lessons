module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/': {
                target: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
                host: 'c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
                changeOrigin: true
            }
        }
    }
};

// axios.get('/soso/fcgi-bin/search_for_qq_cp', {
//     parmas: {
//         _: '1563178931402',
//         g_tk: '5381',
//         uin: '0',
//         format: 'json'
//             ...
//     }
// });
//
// https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?_=1563178931402&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=a&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all

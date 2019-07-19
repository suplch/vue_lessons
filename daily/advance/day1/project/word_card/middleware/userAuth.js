
import axios from 'axios';

import utils from '~/utils/utils';

function checkToken(token, callback) {

    console.log('开始检验 token', token)
    if (!token) {
        console.log('token is undefined');
        callback(false);
        return;
    }
    console.log('准备调用 /api/verify');
    console.log(axios.post);
    console.log(process.server);
    let url;
    if (process.server) {
        url = 'http://localhost:5000/api/verify';
    } else {
        url = '/api/verify';
    }
    axios.post(url,{
        token: token
    }).then((result) => {
        console.log(result.data);
        callback(result.data.status === 10000)
    }).catch(() => {
        callback(false);
    });
    // axios.post('/api/verify', {token}).then((result) => {
    //     console.log('调用 /api/verify 结束');
    //     callback(result.data.status === 10000)
    // })
}

export default function ({route, req, res, redirect}) {
    const isClient = process.client;
    const isServer = process.server;

    let redirectURL = '/login';

    let token, path;

    if (isServer) {
        let cookies = utils.getCookiesInServer(req);
        path = req.originalUrl;
        token = cookies.token || ''
    }

    if (isClient) {
        token = utils.getCookiesInClient('token');
        path = route.path;
    }

    if (path) {
        redirectURL = '/login?ref=' + encodeURIComponent(path);
    }



    return new Promise((resolve, reject) => {

        console.log('准备校验token');
        checkToken(token, function (isOk) {
            resolve();
            if (!isOk) {

                redirect(redirectURL);
            }
        });

        // setTimeout(function () {
        //     resolve();
        // }, 3000)

    });

}



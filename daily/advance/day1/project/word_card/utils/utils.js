
import Cookie from 'js-cookie';

export default {
    getCookiesInServer(req) {
        const service_cookie = {};
        req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
            let parts = val.split('=');
            service_cookie[parts[0].trim()] = (parts[1] || '').trim();
        });
        return service_cookie;
    },

    getCookiesInClient(key) {
        return Cookie.get(key) || '';
    }
}

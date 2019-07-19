const axios = require('axios');
const fs = require('fs');

let resultList = [

];

function buildUrl(url, config) {
    let argv = [];
    for (let prop in config.params) {

        argv.push(`${prop}=${config.params[prop]}`);
    }
    let fullurl = url + '?' + argv.join('&');
    return fullurl
}

async function down(url, config){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let fullPath = buildUrl(url, config);
            axios.get(fullPath).then(function (result) {
                resolve(result.data);
            }).catch(function (error) {
                console.log(fullPath);
                reject(error)
            })
        }, 1000)
    });
}

async function main() {
    for (let index = 1; index <= 27; index++) {
        let data = {
            "comm":{
                "ct":24,"cv":0
            },
            "singerList":{
                "module":"Music.SingerListServer",
                "method":"get_singer_list",
                "param":{
                    "area":-100,
                    "sex":-100,
                    "genre":-100,
                    "index":index,
                    "sin":0,
                    "cur_page":1
                }
            }
        };

        let result = await down('https://u.y.qq.com/cgi-bin/musicu.fcg', {
            params: {
                g_tk: 5381,
                loginUin: 0,
                hostUin: 0,
                format: 'json',
                inCharset: 'utf8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'yqq.json',
                needNewCode: 0,
                data: encodeURIComponent(JSON.stringify(data))
            }
        });
        console.log('index ', index, 'page ', 1);
        resultList.push(result);

        let pageCount = 0;
        if (result.singerList.data.total % 80 === 0) {
            pageCount = result.singerList.data.total / 80
        } else {
            pageCount = Math.floor(result.singerList.data.total / 80) + 1
        }

        for (let current_page = 2; current_page <= pageCount; current_page++) {
            data.singerList.param.sin += 80;
            data.singerList.param.cur_page = current_page;
            let result = await down('https://u.y.qq.com/cgi-bin/musicu.fcg', {
                params: {
                    g_tk: 5381,
                    loginUin: 0,
                    hostUin: 0,
                    format: 'json',
                    inCharset: 'utf8',
                    outCharset: 'utf-8',
                    notice: 0,
                    platform: 'yqq.json',
                    needNewCode: 0,
                    data: encodeURIComponent(JSON.stringify(data))
                }
            });
            console.log('index ', index, 'page ', current_page, 'page count ', pageCount);
            resultList.push(result);
        }

    }
}


main().then(function () {
    fs.writeFileSync('./result.json', JSON.stringify(resultList));
    process.exit(0);
});

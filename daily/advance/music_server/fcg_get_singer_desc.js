const fs = require('fs');
const https = require('https');
const parseString = require('xml2js').parseString;


let url = `https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg?singermid=0041MJYn2PgCuB&utf8=1&outCharset=utf-8&format=xml&r=${Date.now()}`


https.get(url, {
    headers: {
        'Referer': 'https://c.y.qq.com/xhr_proxy_utf8.html',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',

    }
}, function (res) {
    let body = Buffer.alloc(0);
    res.on('data', function (chunk) {
        body = Buffer.concat([body, chunk]);
    });

    res.on('end', function () {

       console.log();

        parseString(body.toString(), function (err, props) {
            console.log(props);

            let info = props
                && props.result
                && props.result.data
                && props.result.data[0]
                && props.result.data[0].info
                && props.result.data[0].info[0];

            let basic = info && info.basic && info.basic[0];
            let detail = info && info.basic && info.desc[0];
            let other = info && info.basic && info.other[0];

            console.log(info);
            console.log(basic);
            console.log(detail);
            console.log(other);


            //fs.writeFileSync('./xml.json', JSON.stringify(result));
        })
    })
});

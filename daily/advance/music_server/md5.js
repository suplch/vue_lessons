// // crypto 是 nodejs 默认 提供的一个 模块 用来给 数据加密
// var crypto = require('crypto');
//
// // 创建一个md5 加密 算法
// var md5 = crypto.createHash('md5');
//
// // 通过 md5 加密算法 对 密码进行加密
// var result = md5.update('123456').digest('hex');
//
// // 输出：0cc175b9c0f1b6a831c399e269772661
// console.log(result);

let privateKey = 'fdsafsdafsdafasfsadf'

const jwt = require('jsonwebtoken');

jwt.sign({login_name: 'zhang'}, privateKey, function (err, result) {
    console.log(result);

    jwt.verify(result, privateKey, function (err, result) {
        console.log(result);
    })
});



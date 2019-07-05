const express = require('express');

// 本文件是 后端程序员开发的 各种 GET POST 服务
const app = express();

app.get('/api/get_name', function (req, res) {

    console.log('haha' ,  Date.now());
    
    res.send({
        status: 10000,
        msg: 'ok 这是一个远程服务数据'
    })
});

app.get('/api/student_list', function (req, res) {

    let students = [
        {id: '111',name: 'liu', age: 12},
        {id: '222',name: 'li', age: 22},
        {id: '333',name: 'zhang', age: 12},
        {id: '444',name: 'fdsaf', age: 12},
        {id: '555',name: 'fdsa', age: 12},
        {id: '66',name: 'fsa', age: 12},
        {id: '77',name: 'fdsaf', age: 12},
    ];

    res.send({
        status: 10000,
        msg: 'ok',
        data: {
            students
        }
    })
});

const port = 3000;
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`正在监听${port}端口`)
});

const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');

const SECRET = 'shhhhh';

const app = express();

app.use(bodyParser.json());

app.get('/api/test', function (req, res) {
    res.send({
        status: 10000,
        msg: 'ok test'
    })
});

app.post('/api/verify', function (req, res) {
    const body = req.body;
    const { token } = body;
    jwt.verify(token, SECRET, function (error, userInfo) {
        if (error) {
            console.log(token);
            console.log('token 校验失败');
            res.send({
                status: 10005,
                msg: 'token 校验失败'
            });
            return;
        }
        console.log('token 校验成功');
        res.send({
            status: 10000,
            msg: 'ok'
        })
    });
});

app.post('/api/login', function (req, res) {
    const body = req.body;

    const { login_name, password } = body;

    if (login_name === 'zhang' && password === '123456') {

        var token = jwt.sign({ login_name, password }, SECRET);
        res.send({
            status: 10000,
            msg: 'ok',
            data: {
                token: token
            }
        })
    } else {
        res.send({
            status: 10001,
            msg: 'error 登录失败'
        })
    }
});

const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }
    console.log(`监听 ${port} 端口`)
});

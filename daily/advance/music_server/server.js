const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
app.use(bodyParser.json());

app.get('/api/get_singers', async function (req, res) {
    try {
        const singers = await db.getSingers();
        res.send({
            status: 10000,
            msg: 'ok',
            data: {
                singers
            }
        })
    } catch (e) {
        res.send({
            status: 10001,
            msg: e.message
        })
    }
});

app.post('/api/query_singers', async function (req, res) {
    const body = req.body;
    const { singer } = body;
    try {
        const singers =await db.querySingers(singer.name, singer.type);
        res.send({
            status: 10000,
            msg: 'ok',
            data: {
                singers
            }
        })
    } catch (e) {
        res.send({
            status: 10001,
            msg: e.message
        })
    }
});

app.post('/api/new_singer', async function (req, res) {
    const body = req.body;
    const { singer } = body;
    try {
        console.log(body.singer);
        const result = await db.createSinger( singer);

        res.send({
            status: 10000,
            msg: 'ok',
            data: {
                result
            }
        })
    } catch( e ) {
        res.send({
            status: 10002,
            msg: e.message
        })
    }
});

app.post('/api/edit_singer', async function (req, res) {
    const body = req.body;
    const { _id, singer } = body;
    try {
        const result = await db.editSinger(_id, singer);
        res.send({
            status: 10000,
            msg: 'ok',
            data: {
                result
            }
        })
    } catch (e) {
        res.send({
            status: 10002,
            msg: e.message
        })
    }
});

const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`正在监听 ${port} 端口`);
});

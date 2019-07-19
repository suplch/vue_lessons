const express = require('express');

const app = express();

app.get('/api/music', function (req, res) {

    res.send({
        status: 10000,
        msg: 'ok',
        data: {
            music_info: {
                id: req.query.id,
                name: '歌曲详细信息'
            }
        }
    })
});


const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('ok ' + port)
});

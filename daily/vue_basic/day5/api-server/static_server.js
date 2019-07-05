const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'testapp', 'dist')));


const port = 3000;
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`正在监听${port}端口`)
});

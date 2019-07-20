const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongodb =  require('mongodb');
const { MongoClient, ObjectId } = mongodb;

const dbUrl = 'mongodb://localhost:27017';


function getSingers(p) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }

            let myTestDB = client.db('mytest');
            let singersCollection = myTestDB.collection('singers');
            singersCollection.find({}).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                client.close();
                resolve(result);
            });
        });
    });
}


function getSingerPage(pageNo, pageSize) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }

            let myTestDB = client.db('mytest');
            let singersCollection = myTestDB.collection('singers');
            singersCollection.find({}).skip(pageNo * pageSize).limit(pageSize).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                client.close();
                setTimeout(function () {
                    resolve(result);
                }, 2000)

            });
        });
    });
}


function addSinger(singer) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            let myTestDB = client.db('mytest');
            let singersCollection = myTestDB.collection('singers');
            singersCollection.insertOne(singer, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }

                singer._id = result.insertedId;

                resolve(singer)
            })
        });
    });
}


function delSinger(singer_id) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            let myTestDB = client.db('mytest');
            let singersCollection = myTestDB.collection('singers');
            singersCollection.removeOne({_id: ObjectId(singer_id)}, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }

                let isOk = result.deletedCount === 1;
                resolve(isOk)

            })
        });
    });
}

function getSongBySingerId(singer_id) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            let myTestDB = client.db('mytest');
            let singersCollection = myTestDB.collection('Songs');
            singersCollection.find({singer_id: singer_id}).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }

                setTimeout(function () {
                    resolve(result)
                }, 2000)
            });
        });
    });
}


//
// async function main() {
//     let result = await getSongBySingerId('5d2fe86076eb43b1e288c711');
//     console.log(result);
// }
//
// main();

//
const app = express();

const path = require('path');



app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/music/getSingers', async function (req, res) {
    let singers = [];
    let status = 10000;
    let msg = 'ok';
    try {
        singers = await getSingers();
    } catch (e) {
        status = 10005;
        msg = e.message;
    }





    res.send({
        status,
        msg,
        data: {
            singers
        }
    })
});

app.get('/music/getSingerPage', async function (req, res) {

    let pageNo = Number(req.query.pageNo);
    let pageSize = Number(req.query.pageSize);

    let singers = [];
    let status = 10000;
    let msg = 'ok';
    try {
        singers = await getSingerPage(pageNo, pageSize);
    } catch (e) {
        status = 10005;
        msg = e.message;
    }

    console.log(req.cookies.token);

    let result = {
        status,
        msg,
        data: {
            singers
        }
    };
    // 校验 token 是否有效, 用来判断 当前用户 是否登录成功
    jwt.verify(req.cookies.token, privateKey, function (err, user) {
        if (err) {
            res.send(result);
            return console.log(err)
        }
        // token 校验成功 返回 user 对象
        result.data.loginUser = user;
        res.send(result);
        console.log(user);
    });
});

// app.post('/music/addSinger', async function (req, res) {
//     const {name, country, hobby, headImg, detail} = req.body;
//     let singer = {name, country, hobby, headImg, detail};
//     let newSinger;
//     let status = 10000;
//     let msg = 'ok';
//     try {
//         newSinger = await addSinger(singer);
//     } catch (err) {
//         status = 10006;
//         msg = err.message
//     }
//
//     res.send({
//         status,
//         msg,
//         data: {
//             singer: newSinger
//         }
//     })
// });

const multer = require('multer');

// nodejs 处理文件上传 模块 api
// https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')  // 告诉 后端 前端提交的文件 存在哪里
    },
    // 给上传文件重命名
    filename: function (req, file, cb) {
        var fileFormat = file.originalname.split('.');
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});

const upload = multer({
    storage: storage
});


app.post('/music/addSinger', upload.single('headImg'), async function (req, res) {
    const {name, country, hobby, detail} = req.body;
    console.log(req.file);
    let headImg = 'http://localhost:5000/' + req.file.filename;
    console.log(req.body);
    let singer = {name, country, hobby, headImg, detail};
    let newSinger;
    let status = 10000;
    let msg = 'ok';
    try {
        newSinger = await addSinger(singer);
    } catch (err) {
        status = 10006;
        msg = err.message
    }

    res.send({
        status,
        msg,
        data: {
            singer: newSinger
        }
    })
});


app.post('/music/delSinger', async function (req, res) {
    const singer_id = req.body.singer_id;
    let status = 10000;
    let msg = 'ok';
    let isOk = false;
    try {
        isOk = await delSinger(singer_id);
    } catch(err) {
        status = 10007;
        msg = err.message;
    }

    res.send({
        status,
        msg,
        data: {
            delOk: isOk
        }
    })
});

app.get('/music/get_songlist_by_singerid', async function (req, res) {
    console.log(req.query);
    let song_list = await getSongBySingerId(req.query.singer_id);


    res.send({
        status: 10000,
        msg: 'ok',
        data: {
            song_list: song_list
        }
    })
});

let count = 1000000;
let tid = setInterval(function () {
    count--;
    if (count === 0) {
        clearInterval(tid)
    }
}, 1000);

app.get('/music/get_pay_result', function (req, res) {

    if (count === 0) {
        res.send({
            status: 10000,
            data: {
                pay: true,
                amount: 5000
            }
        })
    } else {
        res.send({
            status: 10000,
            data: {
                pay: false
            }
        })
    }
});

function register(user) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            let myTestDB = client.db('mytest');
            let userCollection = myTestDB.collection('users');
            userCollection.insertOne(user, function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                user._id = result.insertedId;
                resolve(user)
            })
        });
    });
}

function login(user) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            let myTestDB = client.db('mytest');
            let userCollection = myTestDB.collection('users');
            userCollection.find(user).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log(result);
                let isOk = result.length === 1;
                resolve(isOk);
            })
        });
    });
}
let privateKey = 'fdsafsdafsdafasfsadf';

const jwt = require('jsonwebtoken');

app.post('/music/login', async function (req, res) {

    let login_name = req.body.login_name;
    let password = req.body.password;

    // 创建一个md5 加密 算法
    let md5 = crypto.createHash('md5');
    // 对用户密码 进行 md5 加密
    password = md5.update(password).digest('hex');

    let user = {
        login_name,
        password
    };

    let isOk = await login(user);

    if (isOk) {
        // 登录 成功 生成 token 发给 客户端到 cookie
        jwt.sign({login_name}, privateKey, function (err, token) {
            // 将 token 发送到 客户端 的cookie里
            res.cookie('token', token, {httpOnly: true});
            res.send({
                status: 10000,
                data: {
                    loginOk: isOk
                }
            })

        })
    } else {
        res.send({
            status: 10008,
            data: {
                loginOk: false
            }
        })
    }


});

// crypto 是 nodejs 默认 提供的一个 模块 用来给 数据加密
const crypto = require('crypto');

app.post('/music/register', async function (req, res) {

    let login_name = req.body.login_name;
    let password = req.body.password;

    // 创建一个md5 加密 算法
    let md5 = crypto.createHash('md5');

    // 通过 md5 加密算法 对 密码进行加密
    password = md5.update(password).digest('hex');

    let user = {
        login_name,
        password
    };

    let newUser = await register(user);

    res.send({
        status: 10000,
        data: {
            user: newUser
        }
    })
});

// app.post('/music/upload-single', upload.single('logo'), function (req, res) {
//     console.log(req.file);  // 代表上传的文件
//     console.log('文件类型：%s', req.file.mimetype);
//     console.log('原始文件名：%s', req.file.originalname);
//     console.log((req.file.originalname).split("."));
//     console.log('文件大小：%s', req.file.size);
//     console.log('文件保存路径：%s', req.file.path);
//     console.log(req.body.username);
//     res.send({
//         ret_code: '0',
//         filepath: req.file.path
//     });
// });

const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`正在监听 ${port} 端口`);
});

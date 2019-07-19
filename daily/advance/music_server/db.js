const fs = require('fs');
const https = require('https');
const parseString = require('xml2js').parseString;

const mongodb =  require('mongodb');
const { MongoClient, ObjectId } = mongodb;

const dbUrl = 'mongodb://localhost:27017';

let db;
async function getMusicDB() {
    return new Promise(function (resolve, reject) {
        if (db) {
            process.nextTick(function () {
                resolve(db);
            });
            return;
        }
        MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, client) {
            if (err) {
                reject(err);
                return;
            }
            db = client.db('kuku_music');
            resolve(db);
        });
    })
}

async function getSingers() {
    const database = await getMusicDB();
    const collection = database.collection('singer');
    return new Promise(function (resolve, reject) {
        collection.find({}).limit(20).toArray(function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result)
        });
    });
}

async function createSinger(singer) {
    const database = await getMusicDB();
    const collection = database.collection('singer');
    return new Promise(function (resolve, reject) {
        collection.insertOne(singer, function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    });
}
//  tDb.collection('students').update({name: 'li'}, {$set: {name: '李'}}, function (err, result) {
async function editSinger(_id, singer) {
    const database = await getMusicDB();
    const collection = database.collection('singer');
    return new Promise(function (resolve, reject) {
        collection.updateOne({_id: _id}, {$set: singer}, function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    });
}

async function querySingers(name, type, detail) {
    const database = await getMusicDB();
    const collection = database.collection('singer');
    return new Promise(function (resolve, reject) {
        collection.find({
            $or: [
                {name: new RegExp(name)},
                {type: new RegExp(name)}
            ]
        }).toArray(function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result)
        });
    });
}

module.exports = {
    getSingers,
    querySingers,
    createSinger,
    editSinger
};




// const {getTestDBSync, getStudents } = require('./mongo/mongo_database');

// getTestDB(function (db) {
//
//     db.collection('students').find({age: {$gte: 30}}).toArray(function (err, result) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
// });

// 使用 async 和 await 将异步操作 变成同步模式
// async function main() {
//
//     try {
//         // await
//         const db = await getTestDBSync();
//         const student_collection = db.collection('students');
//         const students = await getStudents(student_collection, {age: {$gte: 30}});
//         console.log(students);
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// main();



// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     let students = testDb.collection('students');
//
//     students.find({age: {$gte: 30}}).toArray(function (err, result) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//
//
//
// });

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').insert({name: '小赵', age: 35}, function (err, result) {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// MongoClient.connect(dbUrl, function (err, client) {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//
//     const testDb = client.db('test');
//
//     testDb.collection('students').update({name: 'li'}, {$set: {name: '李'}}, function (err, result) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
//
// });

// 连接mongo数据库数据
// MongoClient.connect(dbUrl, function (err, client) {
//     // 如果有错误 进行错误处理
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // 否则表示连接成功
//     console.log('连接成功');
//     // client 表示 回调函数返回的mongo客户端
//     // client.db方法可以返回 具体的数据库对象
//     const testDb = client.db('test');
//     // collection 方法 返回 具体的数据表
//     testDb.collection('students').remove({name: '韩梅梅'}, function (err, result) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     });
//     client.close();
// });

// 安装一下 cnpm 工具
// npm install -g cnpm --registry=https://registry.npm.taobao.org

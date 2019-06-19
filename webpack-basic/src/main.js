
const util = require('./utils/util');

const result = util.add(2, 3);

console.log('util.add(2, 3) 的结果为', result);

window.onload = function () {

    let table = util.createTable(3, 5);

    document.body.appendChild(table);

    document.body.appendChild(util.createTable(4, 6))

};

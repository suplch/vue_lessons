
const util = require('./utils/util');
const ui = require('./utils/ui');

require('./style.css');
const Logo = require('./logo.png');

alert(Logo);

const result = util.add(2, 3);

console.log('util.add(2, 3) 的结果为', result);

const result222 = ui.add(' world', '!!!');

console.log(result222);

console.log('hello')

window.onload = function () {


    let table = util.createTable(3, 5);
    table.className = 'hello';
    document.body.appendChild(table);

    const image = new Image();
    image.src = Logo;
    document.body.appendChild(image);

    document.body.appendChild(util.createTable(4, 6))

};

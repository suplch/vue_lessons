
const { add } = require('./utils/caculator');


const { createList } = require('./components/list');


require('./style');
const logo = require('./imgs/logo');
console.log('hello world');

let result = add(2, 3);
console.log(result);
let ul = createList(5);
document.body.appendChild(ul);

let img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

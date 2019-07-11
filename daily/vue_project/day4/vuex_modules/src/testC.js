
function createIdGen() {

    let id = 1001;

    let fn = function () {
        id = id + 1;
        return id
    };

    return fn;

}

let idGen = createIdGen();

let idGenAAA = createIdGen();


console.log(idGen())
console.log(idGen())


console.log(idGenAAA())
console.log(idGenAAA())






// function add() {
//     let a = 100;
//     let b = 200;
//     let c = a + b;
//     return c;
// }
//
// function add2() {
//
//     let result  = add();
//
//     return result;
// }
//
//
// let result = add2();
//
// console.log(result);

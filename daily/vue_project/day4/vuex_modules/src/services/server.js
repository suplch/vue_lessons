
function createIdGen() {

    let id = 1001;

    let fn = function () {
        return id++;
    };

    return fn;

}

const idGen = createIdGen();


function addProduct(product, callback) {

    setTimeout(function () {
        callback({
            product: {
                id: idGen(),
                name: product.name,
                count: product.count,
                price: product.price,
            }
        })
    }, 500);


    // axios.post('/product/add', product).then((result) => {
    //     if (result.data.status === 10000) {
    //         callback({
    //             product: {
    //                 id: idGen(),
    //                 name: product.name,
    //                 count: product.count,
    //                 price: product.price,
    //             }
    //         })
    //     }
    // })
}

export default {
    addProduct
}

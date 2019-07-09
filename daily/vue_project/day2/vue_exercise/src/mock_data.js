
const products = [
    {id: '123', name: '手机'},
    {id: '234', name: '电脑'},
    {id: '456', name: '电视'},
];

const productDetails = {
    '123': '这是一部世界顶级手机, ',
    '234': '这是一部二手电脑 价格便宜 ',
    '456': '最新款 电视 100英寸',
};

export default {
    getProductList(callback) {
        setTimeout(function () {
            callback({
                status: 10000,
                msg: 'ok',
                data: {
                    products
                }
            })
        }, 1000);
    },
    getProductDetail(pid, callback) {
        setTimeout(function () {
            let detail = productDetails[pid]
            callback({
                status: 10000,
                msg: 'ok',
                data: {
                    product: {
                        id: pid,
                        content: detail
                    }
                }
            });
        })
    }
}

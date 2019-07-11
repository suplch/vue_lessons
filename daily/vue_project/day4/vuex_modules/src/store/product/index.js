
import server from '../../services/server';

const ProductModule = {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product);
        },
        delProduct(state, productId) {
            let index = 0;
            for (index = 0; index < state.products.length; index++) {
                if(state.products[index].id === productId ) {
                    break;
                }
            }
            state.products.splice(index, 1);
        }
    },
    actions: {
        addProduct({ commit }, payload) {

            server.addProduct(payload.product, function (result) {
                commit('addProduct', result.product)
            });

        },
        delProduct({commit}, payload) {
            commit('delProduct', payload.productId)
        }
    }

};


export default ProductModule

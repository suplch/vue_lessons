import server from '../../services/server';
const ProductModule = {
    namespaced: true,  // 开启模块命名空间
    state: {
        products: []
    },
    getters: {
        countAdd100(state, getters, rootState, rootGetters) {
            return rootState.count + 100 + rootGetters.doubleCount;
        }
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
        },
        testAction({ commit, dispatch }) {
            console.log('test action ');
            dispatch('addCount', null, { root: true })
        },
        globalAction: {
            root: true,
            handler({commit}) {
                console.log('global action');
            }
        }
    }
};
export default ProductModule

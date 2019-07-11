import Vue from 'vue'
import Vuex from 'vuex';

import ProductModule from './product';
import OrderModule from './order';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doubleCount(state) {
            return 2 * state.count;
        },
        tribleCount(state, getters) {
            return 1 + getters.doubleCount;
        }
    },
    mutations: {
        addCount(state) {
            state.count++
        }
    },
    actions: {
        addCount({commit}) {
            commit('addCount');
        }
    },
    modules: {  // modules 定义 子模块
        product: ProductModule,  // 产品模块
        order: OrderModule       // 订单模块
    }
});

export default store;

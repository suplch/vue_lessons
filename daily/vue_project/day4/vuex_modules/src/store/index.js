import Vue from 'vue'
import Vuex from 'vuex';

import ProductModule from './product';
import OrderModule from './order';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    modules: {
        product: ProductModule,
        order: OrderModule
    }
});

export default store;

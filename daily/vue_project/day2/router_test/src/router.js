import Vue from 'vue';
import VueRouter from 'vue-router';

import Products from './components/Products.vue';
import Orders from './components/Orders.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/products',
            component: Products
        },{
            path: '/orders',
            component: Orders
        }
    ]
});

export default router;

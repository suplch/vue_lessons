import Vue from 'vue'
import VueRouter from 'vue-router';

import Products from './views/Products';
import Orders from './views/Orders';

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/products',
            component: Products
        },
        {
            path: '/orders',
            component: Orders
        }
    ]
});

export default router;

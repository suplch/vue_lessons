
import Vue from "vue";

import VueRouter from 'vue-router';
import Products from '../views/Products.vue';
import Orders from '../views/Orders.vue';
import Index from '../views/Index';
import ProductDetail from '../views/ProductDetail';
import Parent from '../views/Parent';
import ChildA from '../views/ChildA';
import Army from '../views/Army';
import News from '../views/News';
import Chat from '../views/Chat';
import China from '../views/China';
import American from '../views/American';

import BoxA from '../views/BoxA';
import BoxB from '../views/BoxB'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/box',
            components: {
                boxa: BoxA,
                boxb: BoxB,
            }
        },
        { // 当访问 /products 是 界面显示 Products 组件
            path: '/products',
            component: Products,
            beforeEnter(to, from, next) {
                console.log(to);
                console.log(from);
                console.log(next);

                setTimeout(() => {
                    next();
                }, 3000);


            }
        },{  // 当访问 /orders/1234/zhang  时 显示 Orders 组件
            path: '/orders/:id/:name', // :id 和 :name 是 传递的参数
            component: Orders
        },{
            name: 'detail',
            path: '/detail/:pid',
            component: ProductDetail
        },{
            path: '/parent',
            component: Parent,
            meta: {current: '/parent'},
            children: [
                {
                    path: 'childA',
                    component: ChildA
                },
                {
                    path: 'army',
                    component: Army,
                    children: [
                        {
                            path: 'china',
                            component: China,
                        },
                        {
                            path: 'american',
                            component: American
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'chat',
                    component: Chat
                }
            ]
        }
    ]
});

export default router;

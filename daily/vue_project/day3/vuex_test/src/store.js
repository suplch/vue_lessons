import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);  // 需要 告诉vue 使用 Vuex

import {
    ADD_PRODUCT as ADD_PRODUCT_MU,
    INC,
    DEC,
}  from './mutation_const'

import {
    INCREMENT,
    DECREMENT,
    ADD_PRODUCT,
    PAY
} from './action_const';

const store = new Vuex.Store({
    // 全局数据模型 state, 相当于 组件里 的 data
    // 所有组件可以共享这些 state 数据
    state: {
        count: 0,
        products: [
            {id: '122', name: '电脑', price: 10000},
            {id: '223', name: '手机', price: 5000},
        ]
    },
    // getters 相当于 store 的计算属性
    getters: {
        add_a_number(state) {
            return function (num) {
                return state.count + num;
            }
        },
        doubleCount(state) {
            return 2 * state.count;
        },
        tribleCount(state) {
            return 3 * state.count;
        },
        totalPrice(state) {
            let total = 0;
            for (let product of state.products) {
                total += product.price;
            }
            return total;
        }
    },
    // 声明 一个突变对象,
    // 通过对象里的方法 对 state 属性进行修改
    mutations: {
        // 突变方法, 来自于 commit 提交
        [INC] ( state , num) {
            // state.count++;
            state.count += num;
        },
        [DEC] (state, num) {
            state.count -= num;
        },
        [ADD_PRODUCT_MU](state, product) {
            state.products.push(product);
        }
    },
    // 声明一个 actions 动作对象 在对象的方法里 进行 提交突变
    // action 里面用来处理复杂 业务逻辑, 包括各种 异步操作
    actions: {
        [INCREMENT]( {commit, dispatch, getters, state, rootGetters, rootState}, payload) {

            // context.commit 提交一个叫做 inc 的突变,
            // 第二个参数 payload.num 传递给 对应的 突变方法
            setTimeout(async () => {
                commit(INC, payload.num)

                let product = {
                    id: '124555',
                    name: '苹果',
                    price: 5
                };

                // await dispatch('addProduct', product);
                // console.log('产品已经添加');
                // dispatch('pay');

                dispatch('addProduct', product).then(() => {
                    console.log('产品已经添加');
                    dispatch('pay');
                });

            }, 500);


        },
        [DECREMENT](context, payload) {
            // context.commit 提交一个叫做 dec 的突变, 第二个参数 payload.num  传递给 对应的 突变方法
            context.commit(DEC, payload.num)
        },
        [ADD_PRODUCT](context, product) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {

                    context.commit(ADD_PRODUCT, product);
                    resolve();
                }, 5000);
            });
            //  ....
            //  ...


        },
        [PAY](context) {
            // 开始复杂的支付逻辑
        }
    }
});

export default store;

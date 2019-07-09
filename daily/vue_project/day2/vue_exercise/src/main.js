import Vue from 'vue'
// 需要 npm install vue-router --save

import router from './router';

import App from './App.vue'
Vue.config.productionTip = false
// 需要通过 Vue.use 去告诉 vue 框架 使用vue router 库

// 通过 VueRouter 配置 一个路由信息, 告诉vue 不同的地址显示不同的组件

new Vue({
  router: router,  // router 对象一定要 传递给 vue 参数
  render: h => h(App),
}).$mount('#app');

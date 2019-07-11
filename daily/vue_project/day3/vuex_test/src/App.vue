<template>
  <div id="app">
    fsaffasfdsafsfas
    <img alt="Vue logo" src="./assets/logo.png">
    <input v-model.number="num" type="number"><br/>
    <button @click="inc"> + </button>
    <button @click="dec"> - </button>
    <button @click="increment({num: num})">add</button>
    <button @click="addNum({num: num})">add num</button>
    {{ studentCount }}  count: {{ count }}  doubleCount : {{ doubleCount }} tirbleCount: {{ tribleCount }}
    <hr/>
    比count 大100: {{ addanumber }}
    <hr/>
    商品总价: {{ productTotalPrice }}
    <hr/> {{ welcome }}
    <hr/>
    <ul>
      <li v-for="product in products" :key="product.id"> {{ product.name }}, {{ product.price}}</li>
    </ul>
    <input ref="productname" type="text">
    <input ref="price" type="text">
    <button @click="addProduct">添加商品</button>
    <HelloWorld v-bind:count="count"></HelloWorld>
  </div>
</template>
<script>
  import {
    INCREMENT,
    DECREMENT,
    ADD_PRODUCT,
    PAY
  } from './action_const';
import { mapState, mapGetters, mapActions } from 'vuex';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'app',
  data() {
    return {
      num: 0,
      message: 'welcome'
    }
  },
  methods: {
    inc() {
      // this.$store.dispatch 分发一个 名字叫 increment 的 action
      // 传递一个 参数 {num: this.num}
      this.$store.dispatch(INCREMENT, {num: this.num})
    },
    dec() {
      // this.$store.dispatch 分发一个 名字叫 decrement 的 action
      this.$store.dispatch(DECREMENT, {num: this.num})
    },
    // increment(payload) {
    //   this.$store.dispatch('increment', payload)
    // },
    ...mapActions([
      INCREMENT
    ]),
    ...mapActions({
      'addNum': INCREMENT
    }),
    addProduct() {
      let productName = this.$refs.productname.value;
      let price = Number(this.$refs.price.value);
      this.$store.dispatch(ADD_PRODUCT, {
        id: '456',
        name: productName,
        price: price
      })
    }
  },
  computed: {
    addanumber() {
      return this.$store.getters.add_a_number(100);
    },
    welcome() {
      return this.message + ' 张 三'
    },
    doubleCount() {
      // 访问 store 的计算属性 doubleCount
      return this.$store.getters.doubleCount;
    },
    // 将sotre 里的计算属性 映射为组件计算属性
    ...mapGetters([
      'tribleCount'  // 相当于 this.tribleCount  等效于  this.$store.getters.tribleCount
    ]),
    // 将sotre 里的计算属性 映射为组件计算属性productTotalPrice
    ...mapGetters({
      productTotalPrice: 'totalPrice'   // 相当于 this.totalPrice  等效于  this.$store.getters.totalPrice
    }),
    // 将 store 里的state.count 映射 为 组件计算属性
    ...mapState({
      studentCount: state => state.count
    }),
    ...mapState([
      "count", // 相当于return this.$store.state.count
      "products"
    ])
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

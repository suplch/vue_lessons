<template>
    <div>
        <button @click="gotoOrder" style="background: grey; color: white;">跳转到 订单列表</button>
        <template v-if="!loaded">
            正在加载中...
        </template>
        <template v-else-if="loaded && products.length > 0">
            <ul>
                <li v-for="product in products" :key="product.id">
                    {{product.name}}
                    <router-link :to="'/detail/' + product.id + '?pid=' + product.id"> 详情 </router-link>
                </li>
            </ul>
        </template>
        <template v-else>
            数据不存在
        </template>
    </div>
</template>
<script>
    let cache;
    import mockData from '../mock_data';  // 导入假数据 对象
    export default {
        name: "Products",
        data() {
            return {
                loaded: false,  // loaded 表示界面数据是否加载过了
                products: []
            }
        },
        mounted() {
            if (cache) {
                this.loaded = cache.loaded;
                this.products = cache.products;
            } else {
                mockData.getProductList((result) => {
                    cache = {};
                    if (result.status === 10000) {
                        cache.products = result.data.products;
                        this.products = cache.products
                    }
                    this.loaded = true;
                    cache.loaded = this.loaded
                });
            }
        },
        // 进入此 路由组件前 先调用此钩子函数, 只有内部 执行了next 函数, 才可以真正的 进入
        // 参数to 表示 要到达的目标,  from 表示从哪里来,  next 是一个函数, 调用后 才可以继续
        beforeRouteEnter(to, from, next){
            console.log('马上进入 products')
            next()
        },
        // 当路由路径的参数 发生变化 后 调用次 钩子函数
        beforeRouteUpdate(to, from, next) {
            console.log('正在更新 products')
        },
        // 离开此页面前 ,调用此钩子函数, 我们可以根据实际情况 决定是否调用 next 来真正的离开
        beforeRouteLeave(to, from, next) {

            console.log('离开', to)

            if (to.name === 'detail') {
                // 跳转到下一个 继续处理
                next()
            } else {
                console.log('马上离开 products')
                if ( window.confirm('你确定要离开吗')) {
                    next()
                }
            }


        },
        methods: {
            gotoOrder() {
                alert('ok');
                console.log(this);
                this.$router.push('/orders')  // 跳转到 orders 界面
            }
        }
    }
</script>
<style scoped>

</style>

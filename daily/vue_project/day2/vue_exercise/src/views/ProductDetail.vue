<template>
    <div>
        产品详情: <br/>
        {{product_detail}}
    </div>
</template>

<script>
    import mockData from '../mock_data';
    export default {
        name: "ProductDetail",
        data() {
            return {
                product_detail: ''
            }
        },
        mounted() {//  this.$route.query 获取查询字符串 参数
            console.log(this.$route.query.pid);
            // this.$route.params 获取路径参数
            mockData.getProductDetail(this.$route.params.pid, (result) => {
                this.product_detail = result.data.product.content;
            })
        },
        // 当路由路径的参数 发生变化 后 调用次 钩子函数, 我们可以通过 此钩子函数 获取最新的 参数, 来 渲染最新的数据
        beforeRouteUpdate(to, from, next) {
            mockData.getProductDetail(to.query.pid, (result) => {
                this.product_detail = result.data.product.content;
            })
            console.log('正在更新 products')
        },
    }
</script>

<style scoped>

</style>

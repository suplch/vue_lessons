<template>
    <div style="border: 1px red solid; width: 300px; height: 500px;">
        <!--<router-link to="/products">产品列表</router-link><br/>-->
        <button @click="goback">返回</button>
        订单信息
    </div>
</template>

<script>
    export default {
        name: "Orders",
        mounted() {
            // this.$route 保存了路由跳转的 参数信息
            // this.$route.query 可以返回查询字符串参数
            console.log(this.$route.query);
            // this.$route.params 返回 地址路径参数
            console.log(this.$route.params);
            console.log(this.$route.params.name);
        },
        methods: {
            goback() {
                console.log(this.$router);
                // this.$router.go(-1) 表示 返回
                // this.$router 对象上有一系列 方法可以跳转
                // this.$router.push('')
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>

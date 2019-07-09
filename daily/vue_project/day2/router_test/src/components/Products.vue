<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Products",
        data() {
            return {
                products: [
                    {id: '123', name: '手机'},
                    {id: '222', name: '电脑'},
                    {id: '333', name: '电视'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>

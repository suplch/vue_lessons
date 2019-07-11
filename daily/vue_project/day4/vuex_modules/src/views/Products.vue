<template>
    <div>
        Products
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>数量</th>
                    <th>单价</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product of products">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.count }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <button @click="delProduct(product)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            名称 <input ref="product_name" type="text"> <br/>
            数量 <input ref="product_count" type="number"> <br/>
            单价 <input ref="product_price" type="number"> <br/>
            <button @click="addProduct"> 提交 </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "products",
        computed: {
            products() {
                return this.$store.state.product.products;
            }
        },
        methods: {
            addProduct() {
                let name = this.$refs.product_name.value;
                let count = Number(this.$refs.product_count.value);
                let price = Number(this.$refs.product_price.value);

                let product = {
                    name,
                    count,
                    price
                };

                this.$store.dispatch('product/addProduct', {
                    product
                });

                this.$refs.product_name.value = '';
                this.$refs.product_count.value = '';
                this.$refs.product_price.value = '';


            },
            delProduct(product) {
                this.$store.dispatch('product/delProduct', {
                    productId: product.id
                })
            }
        }
    }
</script>

<style scoped>

</style>

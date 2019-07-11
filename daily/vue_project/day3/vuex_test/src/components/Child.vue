<template>
    <div style="border: 1px solid green;">
        {{ count }}, 商品数量 {{ productCount }}, 总价 {{ total }}
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
    name: "Child",
    computed: {
        count() {
            return this.$store.state.count * 2 ;
        },
        // mapState 用来映射 state里面的属性, 变成计算属性
        ...mapState({
            productCount(state) {
                return state.products.length;
            },
            // total(state) {
            //     let result = 0;
            //     for (let product of state.products) {
            //         result += product.price;
            //     }
            //     return result;
            // }
        }),
        ...mapGetters({
            // this.totalPrice 等效于 this.$store.getters.tribleCount
            total: 'totalPrice'

        })
    }
}
</script>

<style scoped>

</style>

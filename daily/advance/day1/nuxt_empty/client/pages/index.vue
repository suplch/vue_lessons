<template>
    <div>
        <h1>Hello World!!!! {{count}}</h1>
        url is {{$store.state.url}}
        <button @click="addCounter">add </button>
        <hr/>
        <Test :argv="'Hello ' + count"></Test>
    </div>
</template>

<script>
    import Test from '../components/test';
    import { mapState } from 'vuex'
    export default {
        name: "index",
        computed: {
            ...mapState({
                count: 'counter'
            })
        },
        methods: {
            addCounter() {
                //this.$store.commit('increment');
                this.$store.dispatch('increment', 5);
            }
        },
        components: {
            Test
        }
    }
</script>

<style scoped>

</style>

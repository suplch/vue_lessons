<template>
    <div>
      About page
      <button @click="addCount">
        add Child count {{ count }}
      </button>
    </div>
</template>

<script>
    export default {
        name: "about",
        middleware: 'test_middle', // 指明 中间件 预处理
        computed: {
          count() {
            return this.$store.state.child.childCount;
          }
        },
        methods: {
          addCount() {
            this.$store.dispatch('child/increment')
          }
        }
    }
</script>

<style scoped>

</style>

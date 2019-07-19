<template>
    <div>
        test 组件 {{ argv }}
    </div>
</template>

<script>
    export default {
        props: {
            argv: String
        },
        name: "test"
    }
</script>

<style scoped>

</style>

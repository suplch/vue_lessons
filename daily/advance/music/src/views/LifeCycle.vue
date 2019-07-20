<template>
    <div>
        Life
        {{ time }}
    </div>
</template>

<script>
    export default {
        name: "LifeCycle",
        data() {
            return {
                time: new Date().toLocaleString()
            }
        },

        mounted() {
            this.__tid = setInterval(() => {
                this.time = new Date().toLocaleString()
                console.log(this.time);
            }, 1000)
        },

        beforeDestroy() {
            clearInterval(this.__tid)
        }
    }
</script>

<style scoped>

</style>

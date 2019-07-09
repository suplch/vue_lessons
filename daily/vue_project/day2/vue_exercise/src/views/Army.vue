<template>
    <div>
        Army
        <div>
            <div>
                <router-link to="/parent/army/china">中国</router-link>
                <router-link to="/parent/army/american">美国</router-link>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Army"
    }
</script>

<style scoped>

</style>

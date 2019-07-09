<template>
    <div style="border: solid 1px red;">
        parent
        <ul class="type">
            <li>
                <router-link to="/parent/army">军事</router-link>
            </li>
            <li>
                <router-link to="/parent/news">新闻</router-link>
            </li>
            <li>
                <router-link to="/parent/chat">论坛</router-link>
            </li>
        </ul>


        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Parent",
        mounted() {
            console.log(this.$route)
        },
        computed: {
            current() {
                return this.$route.meta.current
            }
        }
    }
</script>

<style scoped>
    ul.type {
        height: 30px;
    }
    ul.type > li {
        list-style: none;
        float: left;
        margin: 0px 5px 0px 5px;
    }
</style>

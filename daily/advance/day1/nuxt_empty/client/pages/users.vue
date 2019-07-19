<template>
    <div style="border: solid 1px red;">
        users 外壳 : {{ info }}
        <ul>
            <li v-for="user of users" :key="user.id">{{user.name}}</li>
        </ul>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
    export default {
        name: "users",
        data() {
            return {
                info: 'hi',
                users: [
                    {id: '1001', name: '张三'},
                    {id: '1002', name: '李四'},
                    {id: '1003', name: '王五'},
                ]
            }
        },
        asyncData({req, res, params}) {
            console.log('asyncData');
            console.log(req);
            console.log(res);
            console.log(params);

            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    resolve({
                        info: 'good' + new Date()
                    })
                }, 1000);


            })

        }
    }
</script>

<style scoped>

</style>

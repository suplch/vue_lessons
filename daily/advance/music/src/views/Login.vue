<template>
    <div>
        <a href="#/register">注册</a>
        <hr/>
        登录
        <hr/>
        用户名: <input ref="login_name" />
        密码: <input ref="password" />
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Login",

        methods: {
            login() {
                const user = {
                    login_name: this.$refs.login_name.value,
                    password: this.$refs.password.value
                };
                axios.post('/music/login', user).then((result) => {
                    console.log(result.data);
                    if (result.data.status === 10000) {
                        if (result.data.data.loginOk) {
                            this.$router.go(-1);
                        }
                    }
                })

            }
        }
    }
</script>

<style scoped>

</style>

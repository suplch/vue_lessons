<template>
    <div>
        用户名: <input ref="login_name" type="text">
        密码: <input ref="password" type="password">
        <button @click="submitLogin">登录</button>
    </div>
</template>

<script>
    import Cookie from 'js-cookie';
    import axios from 'axios';
    export default {
        name: "login",
        data() {
            return {
                redirectURL: '/'
            }
        },
        mounted() {
            let redirectUrl = this.$route.query.ref;
            if (redirectUrl) {
                this.redirectURL = redirectUrl;
            }
        },
        methods: {
            submitLogin() {
                let sendData = {
                    login_name: this.$refs.login_name.value,
                    password: this.$refs.password.value
                };
                this.$refs.login_name.value = '';
                this.$refs.password.value = '';

                axios.post('/api/login', sendData).then((result) => {
                    alert(JSON.stringify(result.data));
                    if (result.data.status === 10000) {
                        Cookie.set('token', result.data.data.token);
                        alert(result.data.data.token);
                        this.$router.push(this.redirectURL);
                    } else {
                        alert(res.data.msg)
                    }
                });

            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        注册
        <hr/>
        用户名: <input ref="login_name" /> <br/>
        密 码: <input ref="password" type="password" /> <br/>
        确认密码: <input ref="confirm_password" type="password" /><br/>
        <button @click="register">注册</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Register",
        methods: {
            register() {

                let login_name = this.$refs.login_name.value;
                let password = this.$refs.password.value;
                let confirm_password = this.$refs.confirm_password.value;

                if (password !== confirm_password) {
                    alert('密码输入不一致');
                    return;
                }
                let user = {
                    login_name,
                    password
                };

                axios.post('/music/register', user).then((result) => {
                    console.log(result.data);
                    if (result.data.status === 10000) {
                        this.$router.go(-1);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>

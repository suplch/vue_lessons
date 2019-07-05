(function () {
    Vue.component('login', {  // 声明一个全局组件 login, 在代码中可以通过  <login></login> 来使用
        data: function () {  // 定义数据模型, 注意 组件上的数据模型需要声明一个返回 数据的函数
            return {
                isLogining: false,  // isLogining 表示是否在登录的进行中
                state: ''
            }
        },// template 表示组件的模板, 也就是组件最终的样子
        template: `
                <div style="border: 1px red solid">
                    <label>用户名<input ref="username" /></label>
                    <label>口令<input ref="password" /></label>
                    <!-- 如果 isLogining 为true 那么 登录按钮就禁用 防止用户多次点击  -->
                    <button :disabled="isLogining" @click="login">登录</button>
                    {{ state }}
                </div>
            `,
        methods: {
            login() {
                this.state = '正在登录中...';
                this.isLogining = true;
                // 通过 this.$refs 获取 内部元素对象
                let username = this.$refs.username.value.trim();
                let password = this.$refs.password.value;

                login(username, password, (result) => {
                    if (result === 'ok') {
                        alert('登录成功')
                    } else {
                        alert('失败')
                    }
                    this.isLogining = false;
                    this.state = '';
                })
            }
        }
    });
    function login(username, password, callback) {
        setTimeout(function () {
            if (username === 'abc' && password === '123') {
                callback('ok')
            } else {
                callback('error')
            }
        }, 3000)
    }
})();

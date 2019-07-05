(function () {

    /**
     * 定义一个 login 框组件
     *
     *  四个属性
     *  title 属性用来设置登录框的标题
     *  namelabel 属性用来设置用户名文本
     *  passlabel 属性用来设置 密码的文本显示
     *  loginlabel 属性用来设置 登录按钮上的文本
     *
     * 一个事件
     *   login 当用户点击登录按钮的时候 向外触发一个 叫做 login 的事件,
     *   同时将用户名和密码作为参数传递出去
     *
     *   使用方法 例如  <login title="登录框" v-on:login="调用一个方法($event)"></login>
     *
     */

    Vue.component('login', {
        // props 用户可以自定义 组件的 属性 参数
        props: ['title', 'namelabel', 'passlabel', 'loginlabel'],
        template: `
                <div style="border: solid 1px red;">
                    <header>{{ title }}</header>
                    <label>{{ namelabel }}<input ref="username"></label>
                    <label>{{passlabel}} <input ref="password" type="password"></label>
                    <button @click="login">登录</button>
                    <hr/>


                </div>
            `,
        methods: {
            login() {
                // 通过组件实例对象的 $emit 方法可以产生用户自定义事件
                this.$emit('login', { // 第二个参数 就是 外部的 $event 对象
                    username: this.$refs.username.value,
                    password: this.$refs.password.value
                })
            }
        }
    });

})();

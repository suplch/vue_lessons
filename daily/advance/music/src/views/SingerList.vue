<template>
    <div>
        <a href="#/life"> Life</a>
        <a href="#/pay"> pay</a>
        <a href="#/login">登录/注册</a>

        <ul>
            <li v-for="singer of singers" @click="gotoDetail(singer)">
                <div class="desc">
                    <h4>{{ singer.name }}</h4>
                    <p>
                        {{singer.detail.substr(0, 30) + ' ...'}}
                    </p>
                </div>
                 <img style="text-align: right" :src="singer.headImg"/>
            </li>
        </ul>
        <div v-if="loading" style="font-size: 50px"> <!-- 通过 loading 为 true 表示 正在加载中 -->
            正在加载... 请稍后
        </div>
        <div v-if="noData"> <!-- 通过 noData 为 true 表示 没有数据了 -->
            已经是最后一页, 没有数据了
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    console.log(location.hash);
    if (location.hash === '#/singers') {  // 当在本页面 刷新的时候 先清除缓存
        sessionStorage.removeItem('cacheSingers');
    }
    export default {
        name: "SingerList",
        data() {
            return {
                noData: false,   // 为 true 表示已经没有数据了
                loading: false,  // 为 true 表示正在加载中
                pageNo: 0,       // 页号
                pageSize: 7,     // 一页 有多大
                singers: []      // 界面显示数据集合
            }
        },
        mounted() {
            let cacheSingers = sessionStorage.getItem('cacheSingers');  // 从 sessionStore 取出缓存 数据
            if (!cacheSingers) { // 如果 缓存对象 无效 设置为 空数据 []
                cacheSingers = []
            } else {
                cacheSingers = JSON.parse(cacheSingers) // 将缓存 字符串 解析为 对象
            }
            // 如果有缓存 ,直接使用缓存数据, 节省加载时间
            if (cacheSingers.length > 0) {
                this.singers = cacheSingers;
            } else {
                // 否则 调用 后台服务 返回 一页数据, 根据 pageNo 页号  和  pageSize 页大小
                axios.get(`/music/getSingerPage?pageNo=${this.pageNo}&pageSize=${this.pageSize}`).then((result) => {
                    console.log(result);
                    this.singers = result.data.data.singers;  // 返回一页数据
                    let value = JSON.stringify(this.singers);
                    sessionStorage.setItem('cacheSingers', value)  // 将第一页数据 转为 字符串后 存储到 sessionStorage 中
                });
            }
            // 通过 onscroll 事件 实现页面数据 懒加载
            window.onscroll = (event) => {
                // window.scrollY         表示滚动高度
                // window.innerHeight     表示窗口内部高度
                // document.documentElement.offsetHeight   返回 整个 网页的总高度
                console.log(window.scrollY, window.innerHeight, document.documentElement.offsetHeight);
                // 判断 当页面滚动到底部的时候 准备加载下一页数据
                if (document.documentElement.offsetHeight - (window.scrollY + window.innerHeight) <= 3) {
                    if (this.loading) {
                        return;
                    }
                    console.log('接近底部');
                    this.pageNo++;  // 页号 加一页
                    this.loading = true;  // loading 为 true 表示 加载中...
                    // 发起 ajax 请求 获取 数据  更具 pageNo 页号, pageSize 页大小
                    axios.get(`/music/getSingerPage?pageNo=${this.pageNo}&pageSize=${this.pageSize}`).then((result) => {
                        console.log(result);
                        this.loading = false;  // 获取数据后 将 loading 属性 给为 false 表示, 已经加载结束
                        if (result.data.data.singers.length === 0) {  // 后台返回数据为 0 表示 没有数据了
                            this.noData = true;  // 将 noData 属性设置为 true 表示没有更多数据了
                            window.onscroll = null; // 没有数据的时候 将 onscroll 事件清空, 不要在触发 多余的操作了
                        } else {
                            // 否则 如果 返回了 数据, 就将数据追加到现有的数据中
                            this.singers = [...this.singers, ...result.data.data.singers];
                        }
                    }).catch(() => {
                        this.loading = false; // 如果 后台有错误 也 将 loading 设置 为 false 表示 加载结束
                    });
                }
            }
        },
        methods: {
            gotoDetail(singer) {
                this.$router.push('/songs/' + singer._id);  // 跳转到下一页
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0px;
    }
    ul > li {
        height: 200px;
        margin: 30px 0px 30px 0px;
        border-bottom: solid 1px lightgray;
        padding: 10px;
    }

    ul > li > img {
        width: 160px;
        height: 160px;
        border-radius: 80px;
        text-align: right;
        float: right;

    }

    ul > li > .desc {
        width: 70%;
        float: left;
    }

</style>

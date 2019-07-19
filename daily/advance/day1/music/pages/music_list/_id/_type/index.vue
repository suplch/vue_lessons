<template>
    <div>
      id, type {{ $route.params}}<hr/>
      {{ $route.query}}<hr/>
      {{ message }}<hr/>
      {{ music_info }}
      <button @click="getInfo">get info</button>
      {{ music_info2}}
    </div>
</template>
<script>
  import axios from 'axios';
    function getMusicInfo( callback) {
      let prefix = '';
      if (process.server) { // 如果 是服务端代码 需要 设置完整 请求地址
        prefix = 'http://localhost:5000'
      }
      console.log(process.server);  // 如果 process.server  == true   表示当前的代码在服务端执行
      //process.client
      console.log(prefix);
      axios.get(prefix + '/api/music?id=1234556').then((result) => {
        callback(result);
      })
    }
    export default {
        name: "index",
        data() {
          return {
            music_info2: undefined,
            message: 'welcome'
          }
        },
        asyncData() { // 生命周期钩子 , 服务端执行, 用来 处理首屏 数据
          return new Promise((resolve, reject) => {
            getMusicInfo(function (result) {
              resolve({ // resolve 的数据 会被合并 到 组件 data 数据模型中
                music_info: result.data.data.music_info
              })
            });
          });
        },
        methods: {
          getInfo() {
            getMusicInfo((result) => {
              this.music_info2 = result.data.data.music_info;
            });
          }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div id="app">
    后台管理
    <ul>
      <li v-for="singer of singers">
        {{singer.name}}, {{ singer.country }}, {{ singer.detail.substr(0, 10) + ' ...'}}
        <img :src="singer.headImg" width="50" height="50"/> <button @click="delSinger(singer._id)"> 删除</button>
      </li>
    </ul>
    <div>
      <!--姓名: <input ref="name" type="text" /><br/>-->
      <!--国家: <input ref="country" type="text" /><br/>-->
      <!--爱好: <input ref="hobby" type="text" /><br/>-->
      <!--头像: <input ref="headImg" type="text" /><br/>-->
      <!--简介 : <textarea ref="detail"></textarea><br/>-->
      <!--<button @click="commitSinger">-->
        <!--提交-->
      <!--</button>-->
      <form ref="singer" action="/music/addSinger" method="post" enctype="multipart/form-data">
        姓名: <input name="name" type="text" />
        国家: <input name="country" type="text" />
        爱好: <input name="hobby" type="text" />
        头像: <input type="file" name="headImg" />
        简介 :<textarea name="detail"></textarea>
        <input type="submit" value="添加 歌手">
      </form>
      <button @click="addSinger"> 添加 歌手 ajax</button>
      <hr/>

      <form ref="uploadForm" action="/music/upload-single" method="post" enctype="multipart/form-data">
        选择文件: <input type="file" name="logo" />
        用户名: <input type="text" name="username" />
        <input type="submit" value="表单提交">
      </form>

      <button @click="upload">ajax 提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',

  data() {
    return {
      singers: []
    }
  },

  mounted() {

    axios.get('/music/getSingers').then((result) => {
      this.singers = result.data.data.singers;
    })
  },
  
  methods: {
    commitSinger() {
        let singer = {
          "name" : this.$refs.name.value,
          "country" : this.$refs.country.value,
          "hobby" : this.$refs.hobby.value,
          "headImg" : this.$refs.headImg.value,
          "detail" : this.$refs.detail.value,
        };

        // 收集数据后 将 输入框清空
       this.$refs.name.value = '';
       this.$refs.country.value = '';
       this.$refs.hobby.value = '';
       this.$refs.headImg.value = '';
       this.$refs.detail.value = '';

      // 提交 数据
      axios.post('/music/addSinger', singer).then((result) => {
        console.log(result);
        // 将最新的数据添加到 界面上
        this.singers.push(result.data.data.singer)
      })
    },

    addSinger() {
      let _self = this;
      var instance = axios.create({
        baseURL: '/',
        timeout: 1000000,
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      });

      instance.post('/music/addSinger', new FormData(this.$refs.singer)).then((res) => {
        console.log(res);
        alert(JSON.stringify(res.data));
        _self.singers.push(res.data.data.singer)
      })
    },

    // 更具 singer_id 删除数据
    delSinger(singer_id) {
      axios.post('/music/delSinger', {
        singer_id: singer_id
      }).then((result) => {
          console.log(result);
          if (result.data.data.delOk) { // 判断 如果删除成功了, 就重新刷新数据
            axios.get('/music/getSingers').then((result) => {
              this.singers = result.data.data.singers;
            })
          }
      })
    },

    upload() {
      var instance = axios.create({
        baseURL: '/',
        timeout: 1000000,
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      });

      instance.post('/music/upload-single', new FormData(this.$refs.uploadForm)).then((res) => {
        console.log(res);
        alert(res.data.filepath)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

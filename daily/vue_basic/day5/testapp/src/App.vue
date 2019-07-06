<template>
  <div id="app">
    <button @click="getName">get name</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>

    <Counter></Counter>
    <hr/>
    <Game v-on:win="gameWin($event)"></Game>
    <button @click="searchStudents()">查询</button>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }}
      </li>
    </ul>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue';
import Game from './components/Game.vue';

import axios from 'axios';

export default {
  name: 'app',
  data: function () {
    return {
      students: []
    }
  },
  components: {
    HelloWorld,
    Counter,
    Game
  },
  methods: {
    gameWin(time) {
      alert(`胜利了✌️, 花了${time} 秒`)
    },
    getName() {
      // 前端程序员 发起请求 给 vue 脚手架服务
      axios.get('/api/get_name').then((result) => {
        alert(result.data.msg)
      })
    },
    searchStudents() {
      axios.get('/api/student_list').then((result) => {
        if (result.data.status === 10000) {
          this.students = result.data.data.students;
        }
      });
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

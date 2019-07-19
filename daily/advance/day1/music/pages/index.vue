<template>
  <div class="container">

    <button @click="addCount"> add Count {{ count }} </button>
    <hr/>
    <Login></Login>
    hello
    <a href="/about"> about </a>
    <nuxt-link :to="{name: 'about'}"> ABOUT </nuxt-link>
    <ul>
      <li v-for="student of students" :key="student.id">
        {{ student.name }}
      </li>
    </ul>
    <input ref="name" type="text">
    <button @click="add"> 添加 </button>
  </div>
</template>

<script>
// 以相当路径 导入组件
//import Login from '../components/Login'
// ~ 表示 源代码根目录
import Login from '~/components/Login'
// @ 表示 项目根目录
//import Login from '@/components/Login'

export default {
  data() {
    return {
      students: [
        {id: '1001', name: 'zhang'},
        {id: '1002', name: 'wang'},
        {id: '1003', name: 'li'}
      ]
    }
  },
  methods: {
    add() {
      let name = this.$refs.name.value;

      this.students.push({
        id: '1004',
        name: name
      })

    },
    addCount() {
      this.$store.dispatch('increment')
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  components: {
    Login
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

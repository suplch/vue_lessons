<template>
  <div id="app">
    <!-- router-view 组件用来呈现匹配路由的组件 -->
    <a>军事</a>
    <a>国内</a>
    <a>国际</a>
    <!-- router-view 呈现 匹配的 组件的 -->
    <router-view></router-view>

    <router-view name="boxa"></router-view>
    <hr/>
    <router-view name="boxb"></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

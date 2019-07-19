<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">首页</nuxt-link></li>
      <li><nuxt-link :to="{name: 'about'}">关于</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news'}">新闻</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      message: 'Welcome to Chine',
      count: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
  components: {
    Logo
  }
}
</script>

<style>

</style>

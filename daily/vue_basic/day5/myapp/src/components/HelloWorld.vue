<template>
  <div class="hello">
    <button @click="get_name">test</button>
  </div>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    get_name() {

      axios.get('/api/get_name').then(function (result) {
        alert(result.data.msg)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="hello">
    <input v-model="message">
    {{ message }}
    <hr/>
    <TreeNode :tree_node="root" :parent_node="null"></TreeNode>
  </div>
</template>

<script>
import TreeNode from './Tree.vue';
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      message: 'Welcome',
      root: {
        name: '中国'
      }
    }
  },
  props: {
    msg: String
  },
  components: {
    TreeNode: TreeNode
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    border: solid 1px red;
  }
</style>

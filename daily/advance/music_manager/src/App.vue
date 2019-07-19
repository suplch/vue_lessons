<template>
  <el-container>
    <el-header >
      酷酷音乐🎵
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo" @select="selecMenu">

          <el-menu-item :index="menu.name" v-for="(menu, index) of menus">

              <i class="el-icon-menu"></i>
              <span slot="title">{{menu.text}}</span>

          </el-menu-item>

        </el-menu>

      </el-aside>
      <el-container>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      menus: [
        {text: '摘要', name: 'summary'},
        {text: '歌手', name: 'singer'},
        {text: '曲目', name: 'tracks'},
      ]
    }
  },
  methods: {
    selecMenu(event){
      console.log(event);
      this.$router.push({name: event});
    }
  }
}
</script>

<style scoped>
  .el-container {
    height: 100%;
  }
  .el-header {
    background: #409EFF;
    color: white;
  }

  .el-aside {
    background: rgb(179, 216, 255);
  }

  .el-aside ul {
    list-style: none;
    padding: 0px;
  }

  .el-main {
    padding: 10px;
  }

  .el-main > div {
    /*width: 100%;*/
    /*height: 100%;*/
    box-shadow: 1px 1px 5px gray;
    padding: 10px;
  }

  .el-menu {
    height: 100%;
    background: rgb(198, 226, 255);
  }
</style>

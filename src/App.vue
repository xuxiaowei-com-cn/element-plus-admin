<template>

  <el-container id="app-container">

    <el-aside id="app-aside">

      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu>

    </el-aside>

    <el-container id="app-context">

      <el-header id="app-header">
        <el-button v-if="isCollapse" type="text" class="collapse-button" icon="el-icon-s-unfold"
                   @click="collapse"></el-button>
        <el-button v-else type="text" class="collapse-button" icon="el-icon-s-fold" @click="collapse"></el-button>
      </el-header>


      <el-main id="app-main">

        Main

        <router-view/>

      </el-main>

      <el-footer id="app-footer">Footer</el-footer>

    </el-container>

  </el-container>

</template>

<script>
export default {
  data() {
    return {
      isCollapse: this.$store.state.isCollapse === 'true'
    };
  },
  methods: {
    collapse() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit('setIsCollapse', this.isCollapse)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">

#app-header {
  background-color: beige;
}

#app-aside {
  width: calc(200px + 1px) !important;
  background-color: azure;
}

#app-main {
  background-color: bisque;
}

#app-footer {
  background-color: aliceblue;
  text-align: center;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.collapse-button {
  width: 50px;
  background-color: aqua;
  font-size: 22px !important;
  color: #606266 !important;
}

.collapse-button:hover {
  color: #606266;
}

</style>

<style scoped>

</style>

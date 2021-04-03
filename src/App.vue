<template>

  <el-container id="app-section">

    <el-header id="app-header">Header</el-header>

    <el-container id="app-container">

      <el-aside id="app-aside" width="200px">Aside</el-aside>

      <el-container id="app-context">

        <el-main id="app-main">

          Main

          <router-view/>

        </el-main>

        <el-footer id="app-footer">Footer</el-footer>

      </el-container>

    </el-container>

  </el-container>

</template>

<script setup>

</script>

<style lang="scss">

#app-header {
  background-color: beige;
}

#app-aside {
  background-color: azure;
}

#app-main {
  background-color: bisque;
}

#app-footer {
  background-color: aliceblue;
  text-align: center;
}

</style>

<style scoped>

</style>

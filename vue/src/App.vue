<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import header from '../src/beas/header/header.vue'
  export default {
    components:{
      "v-header":header,
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
#app{
  height: 100%;
}
</style>

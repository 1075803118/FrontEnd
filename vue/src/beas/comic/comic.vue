<template>
  <div class="list">
    <v-classfiy @comicItem="comicview"></v-classfiy>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import classfiy from '../../components/classify/classify.vue'
  import {mapMutations} from "vuex"
  export default {
    methods:{
      comicview(comic){
        console.log(comic)
        this.$router.push({
          path:`/comic/${comic.category_id}`
        })
        this.setGroup(comic)
      },
      ...mapMutations({
        setGroup:"SET_COMIC",
      })
    },
    components:{
      "v-classfiy":classfiy,
    },
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>

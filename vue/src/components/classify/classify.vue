<template>
  <div class="left">
    <v-search></v-search>
    <ul class="class-ul">
      <li class="class-list" v-for="(list,index) in this.list" @click="listSelect(list)">
        <img :src="list.category_cover_url" alt="">
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getClassFiy} from '../../api/classify'
  import search from '../../beas/search/search.vue'
  export default {
    data() {
      return{
        list:[],
        value:''
      }
    },
    created() {
      this._getClassFiy();
    },
    methods:{
      listSelect(item){
        this.$emit('comicItem',item)
      },
      _getClassFiy(){
        getClassFiy().then((res) => {
          this.list=res.category_list
        })
      },
    },
    components:{
      "v-search":search,

    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/style";
  .class-ul{
    margin:0 .7rem;
    .class-list{
      display: inline-block;
      width: calc(33%);
      padding: .3rem;
      img{
        .pic;
      }
    }
  }
</style>

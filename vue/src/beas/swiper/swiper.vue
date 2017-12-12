<template>
  <mt-swipe :auto="4000" >
    <mt-swipe-item v-for="(item,index) in swipeData">
      <img :src="item.content_poster" class="swipeImg">
    </mt-swipe-item>
  </mt-swipe>
</template>
<script type="text/ecmascript-6">
  export default {
    props:{
      swipeData:{
        type:Array,
        default:null
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/style";
  .mint-swipe{
    position: static;
    height: 200px;
    .swipeImg{
      .pic;
      max-height: 100%;
    }
  }
  .mint-swipe-indicators{
    display: none;
  }
  @media screen and (max-width:375px){
    .mint-swipe {
      height: 150px;
    }
  }
</style>

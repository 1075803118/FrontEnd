<template>
  <transition transition name="slide">
    <div class="left">

    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {topList} from '../../api/toplist'
  export default {
    created() {
      this._getTopList();

    },
    mounted() {

    },
    methods:{
      _getTopList(){
        topList().then( (res) => {

        })
      },
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/style";
  .topList{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #f4f4f4;
    top :0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 98;
  }
  &.color{
    background: #fff;
  }
</style>

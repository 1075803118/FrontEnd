<template>
  <div class="page">
    <div class="left">
      <v-swipe :swipeData="this.swipe"></v-swipe>
      <div class="cont">
        <div @click="toplist" class="cont_left con">
          <div class="img">
            <img src="../../../static/comi_logo_left.jpg" alt="">
          </div>
          <div class="title">
            <h2>排行榜</h2>
            <span>热门大作看不停！</span>
          </div>
        </div>
        <div @click="classfiy"  class="cont_right con">
          <div class="img">
            <img src="../../../static/comi_logo_right.jpg" alt="">
          </div>
          <div class="title">
            <h2>分类</h2>
            <span>热门大作看不停！</span>
          </div>
        </div>
      </div>
      <v-list :listArray="this.list"></v-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import swipe from '../../beas/swiper/swiper.vue'
  import topList from '../../components/toplist/toplist.vue'
  import listMain from '../../components/mainList/mainlist.vue'
  import {mainList}  from "../../api/headline"

  export default {
    data() {
      return{
        swipe:[],
        list:[]
      }
    },
    created() {
      this._getMainJson();
    },
    methods:{
      _getMainJson(){
        mainList().then((res) => {
          this.swipe=res.area_list[0].area_content;
          //分割
          res.area_list.splice(0,1);
          for(let i in res.area_list){
            let list=res.area_list[i]
            let msg={
              title:list.area_info.area_title,
              span:list.area_info.area_subtitle,
              cont:this.count(list.area_content),
            }
            this.list.push(msg)
          }
        })
      },
      count(item){
        let ret=[]
        for(let i =0;i<item.length;i++){
          let a=item[i];
          if(a.content_poster.indexOf("ctcdn.comicool.cn")> -1 ){
            ret.push({
              img:a.content_poster,
            })
          }else{
            ret.push({
              name:a.content_title,
              aut:a.content_subtitle,
              pid:a.content_action,
              img:`https://cdn.comicool.cn/${a.content_poster}`,
            })
          }
          }
        return ret
      },
      toplist(){
        this.$router.push({
          path:'/toplist'
        })
      },
      classfiy(){
        this.$router.push({
          path:'/comic'
        })
      }
    },
    components:{
      "v-swipe":swipe,
      "v-top":topList,
      "v-list":listMain
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/style";
  .page{
    height: 100%;
    position: relative;
    top: -4rem;
    .left{
      position: relative;
      height: 100%;
      transition: all ease-out .3s;
      .cont{
        font-size: 0;
        display: flex;
        margin: .7rem .7rem 0 ;
        .con{
          flex: 1;
          font-size: 1rem;
          background: #fff;
          display: flex;
          align-items: center;
          .img{
            width: 3rem;
            img{
              .pic;
            }
          }
          .title{
            flex: 1;
            span{
              font-size: .8rem;
              color: #afafaf;
            }
          }
        }
        .cont_left{
          margin-right: .7rem;
          .title{
            h2{
              color: #eb6877;
            }
          }
        }
        .cont_right{
          .img {
            width: 4rem;
          }
          .title{
            h2{
              color: #f39800;
            }
          }
        }
      }
    }
  }
</style>

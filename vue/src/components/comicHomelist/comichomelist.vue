<template>
  <div class="list">
    <ul class="domUl">
      <li v-for="(list,index) in item" class="listLi" ref="refContent" >
        <img :src="list.img" alt="" class="listImg">
      </li>
    </ul>
    <div class="more" @touchstart.prevent="more" v-show="none">
      <span>{{this.More}}</span>
    </div>
    <div v-show="flg">会员漫画</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getComicMain} from '../../api/comichomelist'
  export default {
    data(){
      return{
        id:this.$route.query.Id,
        pId:this.$route.query.pid,
        item:[],
        flg:false,
        f:true,
        none:false,
        More:'猛戳下一话'
      }
    },
    created() {
      this._getComicMain();
      this.top()
    },
    methods:{
      _getComicMain(){
        getComicMain(this.pId,this.id).then((res) => {
          let frame=res.frame_list
          let show=res.private_resource
          if(show === true){
            this.flg=true
          }
          for(let i in frame){
            this.item.push({
              img:`https://cdn.comicool.cn/${frame[i].frame_url}`
            })
          }
        })
      },
      more(){
        this.id++;
        getComicMain(this.pId,this.id).then((res) => {
          let frame=res.frame_list
          let ul=document.querySelector('.domUl')
          while(ul.hasChildNodes()){ //当div下还存在子节点时 循环继续
            ul.removeChild(ul.firstChild);
          }
            for(let i in frame){
              let msg={
                img:`https://cdn.comicool.cn/${frame[i].frame_url}`
              }
              this.item.push(msg)
            }
        })
      },
      top() {
        window.addEventListener('scroll',(ev) =>{
          let scroll=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if(scroll>150){
            this.none=true
          }else{
            this.none=false
          }
        })
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/style";
  [v-cloak] {
    display: none;
  }
  .list{
    height: 100%;
    position: relative;
    top: -4rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 999;
    .domUl{
      position: relative;
      top: 0;
      .listLi{
        .listImg{
          .pic;
        }
      }
    }
    .more{
      span{
        display: block;
        text-align: center;
        background: red;
        width: 50%;
        color: #fff;
        padding: .5rem;
        border-radius: 20px;
        margin: 1rem auto;
      }
    }
  }
</style>

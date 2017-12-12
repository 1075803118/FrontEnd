<template>
  <div class="header">
    <div class="header-top">
      <div class="nav" @click="taggle()">
        <i class="nav-i"></i>
      </div>
    </div>
    <div class="background">
      <ul>
        <li @click="main"><a>回到首页</a></li>
      </ul>
    </div>
    <div class="boxErr" v-show="show"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        flag:true,
        show:false,
      }
    },
    mounted() {
      this.height();
    },
    created() {
      this.height();
    },
    methods:{
      main(){
        this.$router.push({
          path:'/main'
        })
        let left=document.querySelector('.left');
        let headerNav=document.querySelector('.background');
        let mintHeader=document.querySelector('.header');
        let body=document.body;
        left.classList.remove('leftTransition');
        headerNav.classList.remove('back-translate');
        mintHeader.classList.remove('leftTransition')
        body.classList.remove('none')
        this.show=false
      },
      height(){
        let headerNav=document.querySelector('.background');
        let boxErr=document.querySelector('.boxErr');
        window.addEventListener('resize',()=>{
          headerNav.style.height=document.body.offsetHeight+"px"
          boxErr.style.height=document.body.offsetHeight+"px"
        })
      },
      taggle(){
        let headerNav=document.querySelector('.background');
        let boxErr=document.querySelector('.boxErr');
        headerNav.style.height=document.body.offsetHeight+"px"
        boxErr.style.height=document.body.offsetHeight+"px"
        let left=document.querySelector('.left');
        let mintHeader=document.querySelector('.header');
        let body=document.body;
        if(this.flag){
          left.classList.add('leftTransition')
          headerNav.classList.add('back-translate');
          mintHeader.classList.add('leftTransition')
          body.classList.add('none')
          this.show=true
          this.flag=false
        }else{
          left.classList.remove('leftTransition');
          headerNav.classList.remove('back-translate');
          mintHeader.classList.remove('leftTransition')
          body.classList.remove('none')
          this.show=false
          this.flag=true
        }
      },
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/style";
  .header{
    position: relative;
    z-index: 99;
    .header-top{
      display: flex;
      z-index: 99;
      height: 4rem;
      background: -webkit-linear-gradient(rgba(0, 0, 0,1) 0, transparent 100%);

      .nav{
        flex: 1;
        position: relative;
        .nav-i{
          width: 50%;
          height: 100%;
          position: absolute;
          left: 0;
          &:before{
            content: "";
            position: absolute;
            width: 1.5rem;
            height: .2rem;
            background: #fff;
            top: 1rem;
            left: 1rem;
          }
          &:after{
            top: 1.5rem;
            left: 1rem;
            content: "";
            position: absolute;
            width: 1.5rem;
            height: .2rem;
            background: #fff;
          }
        }
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 62.5%;
      bottom: 0;
      background: #000;
      transform: translate(-100%);
      transition: 1s all;
      ul{
        position: relative;
        height: 100%;
        li{
          height: 100%;
          a{
            color: #fff;
          }
        }
      }
    }
    .boxErr{
      position: fixed;
      width: 100%;
      height: 100%;
      background: #fff;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      z-index: 999;
      top: 3rem;
    }
  }
  .none{
    overflow: hidden;
    height: 100%;
  }

</style>

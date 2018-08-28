<template>
  <div class="mainlist" ref="dom">
    <ul>
      <li v-for="(list,index) in listArray" class="list">
        <h2 class="list-h2" @click="news">{{list.title}} <span>{{list.span}}</span><i> > </i></h2>
        <ul class="item-ul">
          <li v-for="(item,index) in list.cont" class="item" @click="push(item)">
            <div  class="item-img" >
              <img :src="item.img">
            </div>
            <div class="title">
              <h2 class="item-h2">{{item.name}}</h2>
              <p class="item-p">{{item.aut}}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        imgList:[]
      }
    },
    props:{
      listArray:{
        type:Array,
        default:null
      }
    },
    methods:{
      news(){
        this.$router.push({
          path:'/toplist'
        })
      },
      push(list){
        this.$router.push({
          path:'/comichome',
          query:{
            id:list.pid,
            img:list.img
          }
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/style";
  .mainlist{
    margin: 0 .4rem;
    ul{
      padding:.3rem;
      .list{
        margin-top: 1rem;
        background: #fff;
        .list-h2{
          position: relative;
          padding: .7rem .3rem;
          font-weight: 700;
          font-size: 1.1rem;
          span{
            color: #aeaeae;
            font-size: .8rem;
          }
          i{
            position: absolute;
            right: .5rem;
            color: #ccc;
          }
          &:after{
            position: absolute;
            height: .1rem;
            width: 96%;
            content: "";
            background: #ccc;
            left: 2%;
            bottom: 0;
          }
        }
        .item-ul{
          display: flex;
          .item{
            flex:1;
            padding: .3rem;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            .item-img{
              img{
                .pic;
              }
            }
            .item-h2{
              margin: .5rem 0;
              font-size: 1.1rem;
              font-weight: 700;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .item-p{
              color: grey;
            }
          }
        }
        &:last-child{
          .item-ul{
            display: block;
            .item{
              display: flex;
              .item-img{
                width: 6rem;
              }
              .title{
                flex: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 1rem;
              }
            }
          }
        }
        &:nth-child(4) .item-ul{
          display: block;
          &>.item:not(:first-child){
            display: inline-block;
            width: 33%;
          }
          &:nth-child(1){

          }
        }
      }
    }
  }
</style>

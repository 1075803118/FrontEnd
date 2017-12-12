<template>
  <div class="comic">
    <header>
      <span class="back" @click="back()"></span>
      <h1 class="title">{{this.title}}</h1>
    </header>
    <div class="active">
      <ul>
        <li v-for="(comic,index) in this.comic" class="active-list"  @click="comicSelect(comic)">
          <div class="img">
            <img :src="comic.img" alt="">
          </div>
          <div class="list">
            <h2 class="list-h2">{{comic.title}}</h2>
            <p>{{comic.aut}}</p>
            <p>{{comic.act}}</p>
          </div>
          <span class="id">{{comic.id}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from "vuex"
  import {getComicFiy} from '../../api/comicFiy'
  export  default {
    data() {
      return{
        comic:[],
        title:'',
      }
    },
    computed: {
      ...mapGetters([
        'fiy',
      ]),
    },
    created() {
      this._getComic();
    },
    methods:{
      _getComic(){
        if(!this.fiy.category_id){
          this.$router.push({
            path:'/comic'
          })
          return
        }
        this.title=this.fiy.category_title
        getComicFiy(this.fiy.category_id).then((res) => {
          for(let i in res.content_list){
            let cont=res.content_list[i];
            let msg={
              img:`https://cdn.comicool.cn/${cont.content_poster}`,
              title:cont.content_title,
              aut:cont.content_subtitle,
              act:cont.content_desc_lite2,
              id:cont.content_id,
              cid:cont.content_action
            }
            this.comic.push(msg)
          }
        })
      },
      back(){
        this.$router.go(-1)
      },
      comicSelect(comic){
        this.$router.push({
          path:'/comichome',
          query:{
            id:comic.cid,
            img:comic.img
          }
        })
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/style";
  .comic{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 9999;
    header{
      position: fixed;
      display: flex;
      width: 100%;
      line-height: 3;
      background: #fff;
      border-bottom: 1px solid #ccc;
      opacity: .8;
      .back{
        position: absolute;
        margin-left: 1rem;
        &:after{
          position: absolute;
          content: "";
          width: 1.2rem;
          height: .1rem;
          background: #000;
          top: 1rem;
          transform: rotate(-30deg);
        }
        &:before{
          position: absolute;
          content: "";
          width: 1.2rem;
          height: .1rem;
          background: #000;
          transform: rotate(35deg);
          top: 1.6rem;
        }
      }
      .title{
        flex: 1;
        text-align: center;
        font-weight: 700;
      }

    }
    .active{
      background: #f2f2f2;
      margin-top: 3rem;
      .active-list{
        display: flex;
        margin-top: .6rem;
        background: #fff;
        .img{
          width: 8rem;
          img{
            .pic;
          }
        }
        .list{
          width: 12rem;
          line-height: 1.2;
          padding-left: .5rem;
          padding-top: .5rem;
          .list-h2{
            color: #333;
            font-weight: 700;
            font-size: .9rem;
          }
          p{
            color: grey;
            font-size: .8rem;
            margin-top: .5rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 70%;
          }
        }
        .id{
          position: absolute;
          right: 0rem;
          height: 2rem;
          font-size: 1.5rem;
          padding-right: 1rem;
          font-style: oblique;
          margin-top: 2rem;
        }
      }
    }
  }
</style>

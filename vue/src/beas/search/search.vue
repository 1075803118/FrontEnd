<template>
  <div class="search">
    <input v-model="value" class="sear"><a class="btn" @click="searchList()">搜索</a>
    <ul class="listSearch" v-show="listNone">
      <li v-for="(list,index) in list" class="active-list" @click="comicSelect(list)">
        <div class="img">
          <img :src="list.img" alt="">
        </div>
        <div class="list">
          <h2 class="list-h2">{{list.title}}</h2>
          <p>{{list.aut}}</p>
          <p>{{list.act}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {search} from '../../api/search'
  export default {
    data() {
      return{
        value:'',
        list:[],
        listNone:false
      }
    },
    methods:{
      searchList(){
        search(this.value).then((res) => {
          let li=res.comi_list;
          if(this.value === ''){
            this.listNone=false
          }else{
            this.listNone=true
          }
          for(let i in li){
            let cont=li[i]
            let msg={
              img:`https://cdn.comicool.cn/${cont.comic_cover_url}`,
              title:cont.comic_title,
              aut:cont.comic_auth,
              id:cont.comic_id,
              act:cont.comic_desc_lite
            }
            this.list.push(msg)
          }
        })
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
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/style";
  .search{
    width: 96%;
    margin: 0 auto;
    .sear{
      background: #e5e5e5;
      padding: .6rem;
      margin: .5rem 0;
      .border-radius(5px);
      width: 80%;
    }
    .btn{
      padding: .6rem 1rem;
      background: #e32f38;
      color: #fff;
      margin-left: .5rem;
      border-radius: 5px;
    }
    .listSearch{
      position: absolute;
      top:7rem;
      right: 0;
      bottom: 0;
      left: 0;
      background: #f4f4f4;
      width: 100%;
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

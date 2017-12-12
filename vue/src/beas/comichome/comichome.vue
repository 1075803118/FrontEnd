<template>
  <div class="page">
    <div class="left">
      <div class="head">
        <div class="img">
          <img :src="this.img">
        </div>
        <h2 class="head_h2">{{comic.comic_auth}}<span>{{rating}}</span></h2>
      </div>
      <div class="main" ref="tag">
        <div class="nav">
          <mt-button v-for="(item,index) in this.data"  @click.native.prevent="active = `tab-container${index+1}`"  :class="{'on':item.isActive}"  @click="guige(index)">
            <span>{{item.name}}</span>
          </mt-button>
        </div>
        <div class="page-tab-container">
          <mt-tab-container class="page-tabbar-tab-container" v-model="active">
            <mt-tab-container-item id="tab-container1">
              <p class="desc">{{comic.comic_desc}}</p>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
              <ul class="ull">
                <li  v-for="(item,index) in list" class="tab-2"  @click="comicId(item)">
                  <div class="le">
                    <span class="le-span">{{item.ep_title}}</span>
                    <p class="le-p">{{item.update_date}}</p>
                  </div>
                  <div class="ri">
                    <span class="ri-span">{{item.ep_order}}</span>
                    <p class="ri-p">{{item.ep_total_size}}</p>
                  </div>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                <ul class="tab-3" v-for="(list,index) in this.mok">
                  <li class="top" v-for="(item,index) in list.avt">
                    <h2>{{item.title}}</h2>
                    <p v-for="(r,index) in item.rich" v-if="r.ric!=null" class="top-1">
                      <span>{{r.ric}}</span>
                    </p>
                    <p class="top-2">{{item.time}}    更新<span>{{item.count}}</span></p>
                  </li>
                </ul>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getComicHome} from '../../api/comicHome'
  import {getTopList} from '../../api/comicHome'
  export default {
    data() {
      return{
        id:this.$route.query.id,
        img:this.$route.query.img,
        active: 'tab-container1',
        data:[{"name":'详情',"isActive": true},{"name":'剧情',"isActive": false},{"name":'评论',"isActive": false}],
        guigeSpan:"-1",
        comic:[],
        list:[],
        flg:true,
        mok:[],
      }
    },

    created() {
      this._getComicHome();
    },
    computed: {
      rating(){
        let rat=parseFloat(this.comic.rating);
        let res=rat.toFixed(1)
        return res
      }
    },
    methods:{
      comicId(itemId){
        this.$router.push({
          path:'/comichomelist',
          query:{
            Id:itemId.ep_id,
            pid:this.id,
          }
        })
      },
      _getComicHome(){
        getComicHome(this.id).then((res) => {
          this.comic=res.comic_info;
          this.list=res.ep_list
        })
        getTopList(this.id).then((res) => {
          let pmo=res
          let msg={
            avt:this.postList(pmo.post_list)
          }
          this.mok.push(msg)
        })
      },
      postList(list){
        let ret =[]
        for(let i in list){
          let li=list[i]
          ret.push({
            title:li.post_title,
            rich:this.ri(li.post_rich),
            time:this.getiTime(li.post_time),
            count:li.reply_count
          })
        }
        return ret
      },
      ri(l){
        let ret=[]
        for(let i in l){
          ret.push({
            ric:l[i].text
          })
        }
        return ret
      },
      getiTime(time){
        let unixTimestamp = new Date(time*1000) ;
        let commonTime = unixTimestamp.toLocaleString();
        Date.prototype.toLocaleString = function() {
          return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes();
        }
        return commonTime
      },
      topBottom(){
        let ul=document.querySelector('.ull')
        let len=document.querySelectorAll('.tab-2');
        let ret=[];
        let li=len.length;
        for(let i=0;i<li;i++){
          ret[i]=len[i]
        }
        if(!this.flg){
          this.flg=false
        }else{
          ret.reverse()
          this.flg=true
        }
        for(let j=0;j<li;j++){
          ul.appendChild(ret[j]);
        }
      },
      guige(index){
        for(let i = 0; i < this.data.length; i++) {
          this.data[i].isActive = false;
        }
        this.data[index].isActive = true;
        if(index === 1){
          this.topBottom()
        }
      },
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/style";
  .page{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .head{
      position: relative;
      .img{
        img{
          .pic;
          width: 100%;
        }
      }
      .head_h2{
        position: absolute;
        font-weight: 700;
        color: #fff;
        z-index: 999;
        top: 60%;
        font-size: 1.5rem;
        left: 5%;
        display: inline-block;
        span{
          background: #de4c4a;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          display: inline-block;
          vertical-align: text-bottom;
          margin-left: .5rem;
          padding: .65rem .3rem;
          font-size: 1.3rem;
        }
      }
    }
    .nav{
      display: flex;
      .mint-button{
        flex: 1;
        background: #fff;
        border-radius: 0;
        &.on{
          color:red;
          border-bottom: 2px solid #de4c4a;
        }
      }
      .mint-button--default{
        box-shadow: 0 0 1px transparent !important;
      }

    }
    .page-tab-container{
      background: #f2f2f2;
      .mint-tab-container-item{
        width: 96%;
        margin: 1rem auto;
        line-height: 1.5;
        .desc{
          padding: 1rem;
          background: #fff;
        }
        .mint-cell{
          background: transparent;
        }
        .tab-2{
          display: flex;
          background: #fff;
          margin-top: .7rem;
          .le{
            flex: 1;
            width: 50%;
            .le-span{
              padding: .3rem .5rem;
              display: block;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .le-p{
              font-size: .8rem;
              padding:  .5rem;
              color: grey;
            }
          }
          .ri{
            width: 150px;
            text-align: center;
            .ri-span{
              background: #98daf5;
              border-radius: 50%;
              display: block;
              width: 1.4rem;
              height: 1.4rem;
              margin: .3rem auto;
              color: #fff;
              position: relative;
              left: 2rem;
              font-size: .9rem;
            }
            .ri-p{
              font-size: .8rem;
              padding:  .5rem;
              color: grey;
              margin-left: 3rem;
            }
          }
        }
        .tab-3{
          li{
            margin: .5rem;
            h2{
              font-weight: 800;
            }
            .top-1{
              color: #7e8c8d;
              font-size: 1rem;
            }
            .top-2{
              color: #7e8c8d;
              font-size: .9rem;
            }
          }

        }
      }
    }

  }
</style>

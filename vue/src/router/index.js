import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/main/main.vue'
import topList from '../components/toplist/toplist.vue'
import comiclist from '../components/ComicList/comiclist.vue'
import comic from '../beas/comic/comic.vue'
import comichome from '../beas/comichome/comichome.vue'
import comichomeList from '../components/comicHomelist/comichomelist.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', redirect: 'main'},
    {
      path:'/main',
      component:main,
    },
    {
      path:'/toplist',
      component:topList,
    },
    {
      path:'/comic',
      component:comic,
    },
    {
      path:'/comic/:id',
      component:comiclist
    },
    {
      path:'/comichome',
      component:comichome,
    },
    {
      path:'/comichomelist',
      component:comichomeList,
    },
  ]
})

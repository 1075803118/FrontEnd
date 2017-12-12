import jsonp from "../common/js/jsonp.js"
import {commonParams, options} from "../common/js/config"

export  function getComicHome(id) {
  const url="https://proxy.comicool.cn/comicdetail4h5";
  const data=Object.assign({},commonParams,{
    comic_id:id,
    device_id:'a15fc239afa7b4668adf7e6151abb7c5',
  })
  return jsonp(url,data,options);
}
//主页


  export  function getTopList(id) {
    const url="https://proxy.comicool.cn/getpostlist4h5";
    const data=Object.assign({},commonParams,{
      comic_id:id,
      include:'comic',
      order_type:'update_time',
      post_id:9637087,
      page_size:5,
      page_direction:2,
      device_id:'a15fc239afa7b4668adf7e6151abb7c5',
    })
    return jsonp(url,data,options);
  }
//评论

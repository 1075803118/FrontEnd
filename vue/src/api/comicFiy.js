import jsonp from "../common/js/jsonp.js"
import {commonParams,options} from "../common/js/config"

export  function getComicFiy(id) {
  const url="https://proxy.comicool.cn/allcomic4h5";
  const data=Object.assign({},commonParams,{
    comic_id:0,
    page_size:10,
    page_direction:2,
    list_type:'category',
    order_type:'rating',
    req_id:id,
    req_param:1,
    device_id:'a15fc239afa7b4668adf7e6151abb7c5',
  })
  return jsonp(url,data,options);
}

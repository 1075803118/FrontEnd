import jsonp from "../common/js/jsonp.js"
import {commonParams,options} from "../common/js/config"

export  function mainList(num) {
  const url="https://proxy.comicool.cn/homepage4h5";
  const data=Object.assign({},commonParams,{
    device_id:"a15fc239afa7b4668adf7e6151abb7c5",
  })
  return jsonp(url,data,options);
}


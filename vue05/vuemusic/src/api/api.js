import  axios from '../utils/axios';
import  jsonp  from  'jsonp';
let getBannerData=()=>{
    let url ='/hehe/widget?id=LocalNews&ajax=json&t=1603692214902'
    return axios.get(url)
  }
  let getRecommendData =()=>{
      // 获取推荐页面的歌曲数据
      let url ='/hehe/widget?id=LocalNews&ajax=json&t=1603692214902'
      return axios.get(url)
  }
  let getSingersData=()=>{
    let url ='https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
    //param给后端传递函数名的字段 由后端确定的 不能随便写
    return new Promise((resolve,reject)=>{
      jsonp(url,{param:'jsonpCallback'},(err,data)=>{
        if(err){ reject(err)}
        else{ resolve(data)}
      })
    })
  }
  export {
      getBannerData,
      getRecommendData,
      getSingersData
  }
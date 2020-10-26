import  axios from '../utils/axios'
let getBannerData=()=>{
    let url ='/hehe/widget?id=LocalNews&ajax=json&t=1603692214902'
    return axios.get(url)
  }
  let getRecommendData =()=>{
      // 获取推荐页面的歌曲数据
      let url ='/hehe/widget?id=LocalNews&ajax=json&t=1603692214902'
      return axios.get(url)
  }
  export {
      getBannerData,
      getRecommendData
  }
//创建 全局状态管理实例 
import Vuex from 'vuex'
import Vue from  'vue'
Vue.use(Vuex)
// 
let   store = new Vuex.Store({
  state:{ //全局状态值 所有组件都可以用
    name:'韩',
    age:16
  },
  // 修改全局状态值
  mutations:{
    changeName(state,params){
        console.log("修改",state,params)
        state.name = '修改后的名称';
    },
    changeAge(state,params){
        state.age = 99;
    }
  },
  // vuex里的computed
  getters:{
    double(state){
      return state.age*2
    }
  },
  actions:{  //触发mutation
    changeNameAction({commit},params){
      setTimeout(()=>{
        commit('changeName',params)
      },1000)
    }
  }
})

export default store
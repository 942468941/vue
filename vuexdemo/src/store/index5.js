//创建 全局状态管理实例 
import Vuex from 'vuex'
import Vue from  'vue'
import todolist from './todolistStore'
Vue.use(Vuex)
// 
let   store = new Vuex.Store({
  modules:{
    todolist
  },
  
})

export default store
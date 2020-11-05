//创建 全局状态管理实例 
import Vuex from 'vuex'
import Vue from  'vue'
Vue.use(Vuex)
// 
let   store = new Vuex.Store({
  modules:{
    hehe:{
      state:{name:'韩美眉'},
      mutations:{
        changeName(state){
          state.name="李某某"
        }
      },
      getters:{

      },
      actions:{

      }
    },

    xixi:{
      state:{age:32},
      mutations:{
        changeAge(state){
          state.age=99
        }
      },
      getters:{

      },
      actions:{
        
      }
    }
  }
})

export default store
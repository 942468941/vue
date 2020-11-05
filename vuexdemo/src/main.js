import Vue from 'vue'
import App from './App.vue'
// import store from './store/index'
// import store from './store/index2'
import store from './store/index5'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

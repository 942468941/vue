import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './utils/axios'
import VueLazyload from  'vue-lazyload'
Vue.config.productionTip = false

// 引入 mint-ui 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.prototype.$axios = axios;
// 将 axios 挂载到vue的原型上  组件继承实例,所以vue原型上的属性组件也有
// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/favicon.ico',
  attempt: 1
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

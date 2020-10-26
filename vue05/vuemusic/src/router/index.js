import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/Recommend'
import Singer from '../components/Singer'
import Rank from '../components/Rank'
import My from '../components/My'

Vue.use(VueRouter)

const routes = [
  {
    path: '/recommend',
    component:Recommend
  },
  {

    path:'/singer',
    component:Singer,
    children:[
      {
        path:':singermid',
        name:'detail',
        // component:Detail
      }
    ]
    },{
      name:'c',
      path:'/rank',
      component:Rank
    },{
      name:'d',
      path:'/my',
      component:My
    },{
      path:'/',
      redirect:'/recommend'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

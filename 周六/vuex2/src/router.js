import Vue from 'vue'
import VueRouter from 'vue-router'
import DemoState from './components/DemoState.vue'
import DemoGetters from './components/DemoGetters.vue'
import DemoMutation from './components/DemoMutation.vue'
import DemoAction from './components/DemoAction.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      component:DemoState
    },
    {
      path:"/getter",
      component:DemoGetters
    },
    {
      path:"/mutation",
      component:DemoMutation
    },
    {
      path:"/action",
      component:DemoAction
    }
    
  ]
})
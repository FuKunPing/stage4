import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../components/Action.vue'
import Shop from '../components/shop/shop.vue'
import Prod from "../components/shop/products.vue"
import Cart from '../components/shop/cart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/action",
    component:Action
  },
  {
    path:"/shop",
    component:Shop,
    children:[
      {
        path:"prod",
        component:Prod
      },
      {
        path:"cart",
        component:Cart
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

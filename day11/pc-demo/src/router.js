import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/main'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component:Main
        }
    ]
})
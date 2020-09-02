import Vue from 'vue'
import VueRouter from 'vue-router'
import Rank from '@comp/rank/rank.vue'
import Recommend from '@comp/Recommend/Recommend.vue'
import Search from '@comp/Search/Search.vue'
import Singer from '@comp/Singer/Singer.vue'
import SingerDetail from '@comp/singerDetail/singerDetail'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            redirect:"/recommend"
        },
        {
            path:"/recommend",
            component:Recommend
        },
        {
            path:"/singer",
            component:Singer,
            children:[
                {
                    path:':fid',
                    component:SingerDetail
                }
            ]
        },
        {
            path:"/rank",
            component:Rank
        },
        {
            path:'/search',
            component:Search
        }
    ]
})
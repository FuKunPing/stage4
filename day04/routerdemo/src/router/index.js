import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hello from '../components/Hello.vue'
import Hello1 from '../components/Hello1.vue'
import Hello2 from '../components/Hello2.vue'
import Father from '../components/child/Father'
import Son1 from '../components/child/Son1.vue'
import Son2 from '../components/child/Son2.vue'
import Photo from '../components/photo/Photo.vue'
import mkdir from '../components/photo/mkdir.vue'
import upload from '../components/photo/upload.vue'
import show from '../components/photo/show.vue'

Vue.use(VueRouter)

// 配置路由  创建路由对象并导出
export default new VueRouter({
	routes:[  //配置路由的匹配规则
		{
		path:'/', //路由路径(/ 表示根路由)
		name:'home', //路由名称
		component:Home
		},
		{
		path:'/about',
		components:{
			default:About
		}
		},
		{
		path:'/hello',
		components:{
			default:Hello,
			a:Hello1,
			b:Hello2
		}
		},
		// 路由的嵌套
		{
			path:'/father',
			component:Father,
			// 配置子路由
			children:[
			{
				path:"son1",
				component:Son1
			},
			{
				path:"son2",
				component:Son2
			},
			]
		},
		// photo练习
		{
			path:'/photo',
			component:Photo,
			redirect:'/photo/show',
			children:[
				
				{
					path:'show',
					component:show
				},
				{
					path:'mkdir',
					component:mkdir
				},
				{
					path:'upload',
					component:upload
				},
			]
		}
	]
})

  
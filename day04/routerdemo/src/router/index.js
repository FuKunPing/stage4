import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hello from '../components/hello/Hello.vue'
import Hello1 from '../components/hello/Hello1.vue'
import Hello2 from '../components/hello/Hello2.vue'
import Father from '../components/child/Father'
import Son1 from '../components/child/Son1.vue'
import Son2 from '../components/child/Son2.vue'
import Photo from '../components/photo/Photo.vue'
import mkdir from '../components/photo/mkdir.vue'
import upload from '../components/photo/upload.vue'
import show from '../components/photo/show.vue'
import Singer from '../components/singer/singer.vue'
import SingerInfo from '../components/singer/singerInfo.vue'

Vue.use(VueRouter)

// 配置路由  创建路由对象并导出
let router=new VueRouter({
	mode:"history", //请求地址没有#
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
		},
		// alias 别名,意思是当请求为/x,会匹配到当前路由(/about)
		alias:'/x',
		// meta字段（元数据）直接在路由配置的时候，给每个路由添加一个自定义的meta对象，在meta对象中可以设置一些状态，来进行一些操作。
		meta:{ax:true},
		beforeEnter(to,from,next){
			console.log('------------');
			console.log(to);
			console.log(from);
			console.log('------------');
			next()
			/* if(to.matched[0].meta.ax){
				alert("需要登录")
				next(false)
			}else{
				alert("已经登录了")
				next()
			} */
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
			name:'father',
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
		},
		// 动态路由
		{
			path:"/singer",
			component:Singer,
			children:[
			{
				//  动态路径参数 以冒号开头
				path:':url',
				component:SingerInfo
			}
			]
		}
	]
})

/* router.beforeEach((to,from,next)=>{
	console.log('-------beforeEach----------')
	console.log(to)//到哪去
	console.log(from)//从哪来
	next()
	console.log('-------beforeEach----------')
}) */

export default router;

  
import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from './components/Show.vue'
import Chapter from './components/ChapterList.vue'
import Content from './components/Content.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:"history",
  routes:[
	{
		path:"/",
		redirect:"/1",
	},
	{
		path:"/:id",
		component:Show,
		children:[
			{
				path:":name",
				name:"chapter",
				component:Chapter,
				children:[
					{
					path:':title',
					name:"content",
					component:Content
				}
				]
			}
		]
	}
  ]
})

export default router

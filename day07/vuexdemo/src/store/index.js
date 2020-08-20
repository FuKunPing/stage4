import Vue from 'vue'
import Vuex from 'vuex'
import { ADD,REDUCE } from './event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 7,
    stus:[
      {id:1,name:'zhangsan'},
      {id:2,name:"lisi"},
      {id:3,name:"wangwu"}
	],
	products:[]
  },
  getters: {
	getStuById(state){
		/* return function(id){
			return state.stus.filter(val=>{
				return val.id==id;
			})
		} */
		return (id)=>state.stus.filter(val=>val.id==id);		
	},
	getStuNames(state){
		/* let names=[];
		for(let i=0;i<state.stus.length;i++){
			names.push(state.stus[i].name);
		}
		return names */

		// 过滤
		return state.stus.filter(stu=>stu.name.indexOf('a')!=-1)

	},
	cartPro(state){
		let arr=[];
		state.products.forEach((val)=>{
			let name=val.name;
			let price=val.price;
			let count=0;
			arr.push({name,price,count})
		});
		return arr;
	}
  },
  mutations: {
	increase(state){
		console.log('mucation------increase');
		state.num++;
	},
	// 有载荷的事件
	inc2(state,payload){
		// state.num+=payload;
		// 载荷是一个对象
		state.num+=payload.a;
	},
	[ADD](state){
		state.num++
	},
	[REDUCE](state){
		state.num--
	},
	testAsync(state){
		// 异步事件
		setTimeout(()=>{
			state.num++
		},2000)
	},
	addPro(state,payload){
		state.products.push(payload.pro)
	}
  },
  actions: {
	// 参数不是state,因为actions不能修改state
	actAdd(context){
		console.log('action----actAdd');
		// action提交事件给mucation
		// 提交一个increase事件给mucation(必须是mucation里有的事件)
		// context.commit('increase')

		// 异步事件
		setTimeout(()=>{
			context.commit('increase')
		},2000)
	}
  }
})

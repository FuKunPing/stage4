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
	// 商品信息数据 prods这边add方法传过来的数据(id,name,price)
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
	// 购物车数据
	cartPro(state){
		// 购物车数组(name,price,count)
		let arr=[];
		state.products.forEach((val)=>{
			let name=val.name;
			let price=val.price;
			let count=val.count || 1; 
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
	// 添加数据到products
	addPro(state,payload){
		state.products.push(payload.pro)
	},
	// 添加count值
	addCount(state,payload){
		// payload.idx 点击的商品下标
		state.products[payload.idx].count++
	},
	// 减少count值，当购物车没有商品的时候，不能减数量
	reduceCount(state,payload){
		// 这样减数量，当购物车没有数据的时候再点击-会报错
		// if(state.products[payload.idx].count>1){
		// 	state.products[payload.idx].count--
		// }
		let pros=state.products;
		let name=payload.name; //购物车的商品名字
		for(let i=0;i<pros.length;i++){
			if(name==pros[i].name){
				// 购物车里有相同名字的数据,修改他的数量
				if(state.products[i].count>1){
					state.products[i].count--;	
				}		
				break;
			}
		}
	},
	// 删除购物车商品
	removePro(state,payload){
		// console.log(this.getters.cartPro);
		state.products.splice(payload.idx,1);
	},
	// 结账：删除所有
	removeAll(state){
		state.products=[]
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

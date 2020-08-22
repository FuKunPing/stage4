import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    num:1,
    arr:['apple','orange','banana','strawberry','peach'],
    stus:[
      {id:1,name:'jim',age:20},
      {id:2,name:'jack',age:21},
      {id:3,name:'lucy',age:21},
      {id:4,name:'tom',age:22},
      {id:5,name:'amy',age:23},
      {id:6,name:'anna',age:24},
      {id:7,name:'bob',age:25}
    ] 
  },
  // 过滤数据
  getters:{
    // 取num的平方值
    square(state){
      return Math.pow(state.num,2)
    },
    // 获取名字
    getNames(state){
      return state.stus.map(val=>{
          return val.name
      })
    },
    // 获取带p的水果
    getPs(state){
      // return state.arr.map(val=>{
      //   if(val.indexOf('p')!=-1){
      //     return val
      //   }
      // })
      let arr=[];
      state.arr.forEach(val=>{
        if(val.indexOf('p')!=-1){
          arr.push(val)
        }
      })
      return arr;
    }
  },
  // 操作数据
  mutations:{
    addNum(state){
      state.num++
    },
    addFruit(state,payload){
      state.arr.push(payload.fruit)
    }
  },
  // 提交事件给mutation(必须是mutation中定义的方法)
  actions:{
    increase(context){
		context.commit('addNum')
    }
  }
})
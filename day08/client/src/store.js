import Vue from 'vue'
import Vuex from 'vuex'
// import Emp from './entity/Emp.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emps: []
  },
  mutations: {
    // 修改state里的emps的数据
    setAllEmps(state,payload){
      state.emps = payload.emps;
    },
    // 点击添加用户，将数据添加进state的emps
    addEmp(state,payload){
      state.emps.push(payload.emp);
    },
    // 删除
    /* delEmp(state,payload){
      state.emps.splice(payload.idx,1);
    }, */
    // 修改
    modifyEmp(state,paylaod){
      // filter:{emmId:xxx}
      // data:{xxx:xxx,xxx:xxx}
      let filter=paylaod.filter;
      let data=paylaod.data;
      for(let i=0;i<state.emps.length;i++){
        let emp=state.emps[i];
        if(emp.empId==filter.empId){
          state.emps[i]=data;
          // state.emps[i]={...filter,...data};
          break;  
        }
      }
    }
  }
})

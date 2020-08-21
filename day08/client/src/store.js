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
    }
  }
})

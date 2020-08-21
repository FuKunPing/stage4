import Vue from 'vue'
import Vuex from 'vuex'
// import Emp from './entity/Emp.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emps: []
  },
  mutations: {
    setAllEmps(state,payload){
      state.emps = payload.emps;
    },
    addEmp(state,payload){
      state.emps.push(payload.emp);
    }
  }
})

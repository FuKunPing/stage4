<template>
  <div id="app">
    <h1>员工信息管理平台</h1>
    <div id="nav">
      <router-link to="/list">员工列表</router-link> | 
      <router-link to="/add">添加员工</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import util from './api/index.js'
import {mapMutations} from 'vuex'
export default {
  // 发送请求从数据库获取数据
  created() {
    this._getAllEmps()
  },
  methods: {
    ...mapMutations(["setAllEmps"]),
    _getAllEmps(){
      util.getAllEmps().then(res=>{
        this.setAllEmps({
          emps: res
        })
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id='temp01'>
      <div class='demo1'>
        <div class='search clearFix'>
          <div class='clearFix s_box'>
            <input type="text" class='keyWord' @click="toggle" v-model="str">
            <input type="button" value='GO' class='go'>
          </div>
          <li-list :lists="listArr" v-show="show" @toFather="receive"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LiList from './components/li-list'

export default {
  name: 'App',
  data() {
    return {
      str: "",
      listArr: [
        'HTML5+CSS3',
        'JavaScript',
        'Angular.js',
        'Vue.js',
        'React.js',
        'Node.js',
        'React-Native'
      ],
      show: false
    }
  },
  methods: {
    toggle(){
      this.show = !this.show
    },
    receive(item){
      this.str = item;
    }
  },
  components: {
    LiList
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
  margin-top: 60px;
}
.demo1 {
  margin-left:200px;
}  
.clearFix:before,
.clearFix:after {
  display: table;
  content: '';
}
.clearFix:after {
  clear: both;
}
.search {
  width: 320px;
  max-height: 300px;
  border-radius: 20px;
  background: #ddd;
}
.s_box {
  width: 300px;
  margin: 10px auto;
}
.keyWord {
  width: 230px;
  height: 30px;
  border-radius: 15px;
  outline: none;
  border: none;
  font-size: 18px;
  padding-left: 10px;
}
.go {
  border-radius: 15px;
  outline: none;
  width: 50px;
  height: 30px;
  border: none;
  background: #e4393c;
}
</style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
	<h1>{{num}}</h1>
	<button @click="add">增加num</button> |
	<button @click="add2">有载荷</button> |
	<button @click="test">异步</button>

  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations} from "vuex"
import { ADD,REDUCE }  from '../store/event.js'

export default {
	computed: {
		...mapGetters(['getStuNames','getStuById']),
		...mapState(['num','stus'])
	},
	methods: {
		// 使用mutation的辅助函数
		...mapMutations(['increase','inc2',ADD,REDUCE,'testAsync']),
		add(){
			// 没用，改不了vuex里的值,
			// this.$store.state.num++
			//要用this.$store.commit,提交increase事件(定义在mucation中的方法)
			// this.$store.commit('increase')

			// 辅助函数调用
			this.increase();
			// this[ADD]();
		},
		add2(){
			// 提交事件，mucation自动调用对应的事件函数
			// this.$store.commit('inc2',5)
			// this.$store.commit('inc2',{a:5})
			// commit传对象形式
			/* this.$store.commit({
				type:"inc2",
				a:5
			}) */

			// 辅助函数调用
			// this.inc2({a:5})
			this[REDUCE]();
		},
		test(){
			this.testAsync()
		}

	},
}
</script>

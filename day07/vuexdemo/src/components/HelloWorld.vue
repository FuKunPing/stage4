<template>
  <div class="hello">
    {{ $store.state.num }} | {{showNum}} | {{showNum2}} | {{num2}} | {{num}} | {{stus[0].name}}
    <h1>{{ msg }}</h1>
	{{getNames}}
    <button @click="show">显示num的值</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  /* ===========方式一============ */
  // computed: {
  //   showNum(){
  //     // 通过$store对象获取状态
  //     return this.$store.state.num;
  //   }
  // },
  /* 方式二：通过辅助函数 mapState 
      mapState 方法的返回值就是一个对象
  */
  // computed: mapState({
  //   // 转换成es5,一个参数一个返回值都省略
  //   // showNum:function(state){
  //   //   return state.num
  //   // }
  //   showNum:state=>state.num
  // }),
  /* 将方式一和方式二合并 
      使用扩展符号将对象打散合并到另一个对象里面
  */
  computed: {
    ...mapState({showNum:state=>state.num}),
    showNum2(){
      return this.$store.state.num
    },
    // 方式三: 参数映射状态
    // 数组的元素对应着store中的state里面定义的状态属性，必须保持一致，使用时，在模板中就是使用num
    // 返回的{num:state.num,num2:state.num2}
    // ...mapState(['num']),//index.js中state定义的num
    // ...mapState(['num2']),//index.js中state没有定义num2
	...mapState(['num2','num','stus']),//可以写一起
	/* getNames(){
		return this.$store.getters.getStuNames;
	},
	getStu(){
		let a=this.$store.getters.getStuById(2);
		console.log(a)
		return a
	} */
	// 使用mapGetters辅助函数
	// {getStuNames:this.$store.getters.getStuNames}
	// ...mapGetters(['getNames'])
	...mapGetters({
		// 计算属性名：getters名
		getNames:'getStuNames'
	})
  },
  methods: {
    show(){
      // 通过当前组件实例调用计算属性
      console.log(1,this.$store.state.num)   
      console.log(2, this.showNum)  
      console.log(3, this.showNum2)  
      console.log(4, this.num2)//undefined
      console.log(5, this.num)  
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

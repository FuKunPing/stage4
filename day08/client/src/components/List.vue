<template>
  <div>
    <div class="container">
      <div class="row" v-for="(emp,i) in emps" :key="i">
        <div class="col-sm-1">
          {{emp.empId}}
        </div>
        <div class="col-sm-1">
          {{emp.empName}}
        </div>
        <div class="col-sm-1">
          {{emp.gender=='M'?'男':'女'}}
        </div>
        <div class="col-sm-1">
          {{emp.age}}
        </div>
        <div class="col-sm-1">
          {{emp.position}}
        </div>
        <div class="col-sm-2">
          {{emp.telephone}}
        </div>
        <div class="col-sm-2">
          {{emp.address}}
        </div>
        <div class="col-sm-1">
          {{emp.edu}}
        </div>
        <div class="col-sm-1">
          <span @click="modify(emp)">管理</span>
        </div>
        <div class="col-sm-1">
          <span @click="del(emp,i)">删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../api'
import {mapState,mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState(['emps'])
  },
    // 组件进入重新调用，点击添加后跳转页面才会更新
  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter')
    next(vm=>{
		vm._getAllEmps();
    })
  },
  methods: {
	...mapMutations(["setAllEmps",'delEmp']),
	
    _getAllEmps(){
      // 调用方法获取数据库的用户信息，再把取到的数据通过mutation修改放到state里
      util.getAllEmps().then(res=>{
        this.setAllEmps({
          emps: res
        })
		});
    },
    // 管理员工
    modify(emp){
		console.log(emp);
	},
	// 删除
	del(emp,i){
		console.log(emp);
		let f=confirm('确认删除这个员工?');
		if(!f){
			return ;
		}
		alert('删除成功')
		util.delEmp(emp).then(res=>{
			console.log(res);
			this.delEmp({
				idx:i
			})
			// this.$router.push('/')
		})
	},
  },
}
</script>

<style scoped>
  .row>div{
    border:1px solid black;
  }
  span{
    color: darkgrey;
    text-decoration: underline;
  }
  span:hover{
    cursor: pointer;
    color: red;
  }
</style>
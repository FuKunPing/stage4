<template>
  <div class="list" ref='list'>
	<button @click="toggle" class="btn btn-info">{{toggleShow}}</button>
    <div class="container">
      <div class="row" v-for="(emp,i) in filterEmps" :key="i">
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
          {{emp.status?'离职':"在职"}}
        </div>
		<div class="col-sm-1">
          {{emp.edu}}
        </div>
        <div class="col-sm-1">
          <span @click="modify(emp)">管理</span>
        </div>
        <!-- <div class="col-sm-1">
          <span @click="del(emp,i)">删除</span>
        </div> -->
      </div>
    </div>
	<router-view></router-view>
  </div>
</template>

<script>
import util from '../api'
import {mapState,mapMutations} from 'vuex'

export default {
	data(){
		return {
			status:1
		}
	},
  computed: {
	...mapState(['emps']),
	// 切换按钮
	toggleShow(){
		return this.status==1?'所有信息':this.status==2?'所有在职':"所有离职"
	},
	// 过滤员工信息
	filterEmps(){
		let onEmps=[];//在职
		let offEmps=[]//离职
		let emps=this.emps;//所有的
		for(let i=0;i<emps.length;i++){
			if(emps[i].status){
				// 值为true，表示离职
				offEmps.push(emps[i]);
			}else{
				// false为在职的
				onEmps.push(emps[i]);
			}
		}
		// 1:显示所有 2 显示在职 3 显示离职
		return this.status==1?this.emps:this.status==2?onEmps:offEmps
	}
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
      // 调用api方法获取数据库的用户信息，再把取到的数据通过mutation修改放到state里
      util.getAllEmps().then(res=>{
        this.setAllEmps({
          emps: res
        })
		});
    },
    // 老师的管理员工，使用编程式导航,传参
    modify(emp){
		// console.log(emp);
		this.$router.push({
			path:'/list/modify',
			query:{
				empId:emp.empId,
				empName:emp.empName
			}
		})

	},
	// 切换
	toggle(){
		this.status=this.status==1?2:this.status==2?3:1;
		/* if(this.status==1){
			this.status=2
		}else if(this.status==2){
			this.status=3
		}else{
			this.status=1
		} */
	},
	// 删除
	/* del(emp,i){
		console.log(emp);
		let f=confirm('确认删除这个员工?');
		if(!f){
			return ;
		}
    alert('删除成功')
    // 调用api方法删除数据库里的数据，然后调用mutation方法修改state里的值
		util.delEmp(emp).then(res=>{
			console.log(res);
			this.delEmp({
				idx:i
			})
			// this.$router.push('/')
		})
	}, */
  },
}
</script>

<style scoped>
	.list{
		position: relative;
	}
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
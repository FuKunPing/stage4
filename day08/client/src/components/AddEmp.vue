<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        empId: 
      </div>
      <div class="col-sm-4">
        <input type="text" v-model="empId" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        empName:
      </div>
      <div class="col-sm-4">
        <input type="text" v-model="empName" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        gender: 
      </div>
      <div class="col-sm-4 center">
        <input type="radio" v-model="gender" value="M" name="a"> 男 
        <input type="radio" v-model="gender" value="F" name="a"> 女
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        age:
      </div>
      <div class="col-sm-4">
        <input type="text" v-model="age" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        position:
      </div>
      <div class="col-sm-4">
        <select v-model="position" class="form-control">
          <option value="销售">销售</option>
          <option value="人事">人事</option>
          <option value="技术">技术</option>
          <option value="财务">财务</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        telephone:
      </div>
      <div class="col-sm-4">
        <input type="text" v-model="telephone" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        address:
      </div>
      <div class="col-sm-4">
        <input type="text" v-model="address" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        edu:
      </div>
      <div class="col-sm-4">
        <select v-model="edu" class="form-control">
          <option value="高中以下">高中以下</option>
          <option value="本科">本科</option>
          <option value="大专">大专</option>
          <option value="研究生以上">研究生以上</option>
        </select>
      </div>
    </div>
    <button class="btn btn-info" @click="add">添加</button>
  </div>
</template>

<script>
import Emp from '../entity/Emp.js'
import util from '../api/index.js'

export default {
  data() {
    return {
      empId: null,
      empName: '',
      gender: 'M',
      age: null,
      position: '销售',
      telephone: '',
      address: '',
      edu: '高中以下'
    }
  },
  methods: {
    //都不为空才可以添加进数据库
    add(){
      //使用自定义的构造类
        let emp=new Emp(
            this.empId,
            this.empName,
            this.gender,
            this.age,
            this.position,
            this.telephone,
            this.address,
            this.edu
        );
        // 点击添加，调用api方法添加数据到数据库
        util.addEmp(emp).then(data=>{
            console.log(data)
            //点击添加后跳转到首页
            this.$router.push('/')
        });
    }
  },
}
</script>

<style scoped>
  .row{
    margin-top: 5px;
  }
  .col-sm-5{
    text-align: right;
  }
  .center{
    text-align: center;
  }
</style>
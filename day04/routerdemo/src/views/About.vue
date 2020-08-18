<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 在表达式中不需要写this 不建议使用这种-->
    <!-- {{$route.query.aaa}} -->
    <!-- {{str}} -->

    <!-- 使用computed -->
    {{ getA }},{{str}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      str:"区分一下"
    }
  },
  computed: {
    getA(){
      return this.$route.query.aaa;
    }
  },
  // 组件创建成功后
  created() {
    // console.log(this.$route.query.aaa);//1
    console.log(this.$route.query);//{aaa: "1", bbb: "2"}
    console.log(this.str);
    console.log('$route:',this.$route);//this.$route 访问当前路由
    console.log('$router:',this.$router);//this.$router 访问路由器
  },
}
</script>

<style scoped>
  .about{
    width: 100%;
    height: 400px;
    background-color:red;
  }
</style>
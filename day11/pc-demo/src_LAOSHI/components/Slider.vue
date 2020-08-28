<template>
  <div class='slide-show'>
    <el-carousel :interval="5000" height="506px">
      <el-carousel-item v-for="(pic,i) in pics" :key="i" :label="pic.title">
        <img :src="pic.src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg:"按时吃药"
      }
    },
    props: {
      pics: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }   
</script>
<style scoped>
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
    color:blue;
  }
</style>
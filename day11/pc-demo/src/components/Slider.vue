<template>
  <div class='slide-show'>
      <!-- <div class='slide-img' v-for='(item,i) in imgs' :key="i">  
         <img :src="item.src" alt=' 这是幻灯片组件'>
      </div>
      <h2>{{msg}}</h2> -->
      <el-carousel :interval="5000" height='506px'>
        <el-carousel-item v-for="(img,i) in imgs" :key="i" :label='img.title'>
            <img :src="img.src">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        props:{
            imgs:{
                type:Array,
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
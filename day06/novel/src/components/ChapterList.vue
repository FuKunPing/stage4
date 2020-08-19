<template>
  <div class=" chapter">
    <h1>{{$route.params.name}}</h1>
    <div class="close" @click="close">X</div>
    <div class="row">
      <div v-for="(c,i) in charpters" :key="i" class="col-sm-4" @click="choose(c)">
        {{ c.title }}
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import util from '../api/getData.js'

export default {
    data(){
        return {
            charpters:[]
        }
    },
    methods: {
        close(){
            //回到上一步路由 
        // this.$router.go(-1)
        this.$router.back();
        },
        _getChapter(){
            let url=this.$route.params.url;
            util.getChapter(url).then(data=>{
                this.charpters=data;    
            })
        },
        choose(chapter){
            // 切换路由到某个章节组件
            // console.log(chapter)//  [url,title]
            this.$router.push({
                name:`content`,
                params:{
                    url:chapter.url,
                    title:chapter.title
                }
            })
        }
  },
    created() {
            this._getChapter() 
    },
}
</script>

<style scoped>
  .chapter{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    width: 80%;
    height:150%;
    margin: 0 auto;
    /* height: 500px; */
    background-color: #E9FAFF;
    
    /* padding: 0; */
  }
  .close{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 25px;
    cursor: pointer;
  }
  .row{
    text-align: left;
    overflow: scroll;
    height:600px;
    width:100%;
    margin:0 1px;
  }
  .row>div{
    border-bottom: 1px dashed #CCCCCC;
    height: 25px;
    line-height: 200%;
    margin-bottom: 5px;
    text-indent: 10px;
    vertical-align: middle;
    cursor: pointer;
  }
  .row>div:hover{
    color:#6F78A7;
  }
</style>
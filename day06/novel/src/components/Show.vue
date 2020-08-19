<template>
    <div class="show">
        <!-- <h1>{{$route.params.id}}</h1> -->
        <!-- <h1>{{`http://www.biquge.info/list/${$route.params.id}_1.html`}}</h1> -->
        <ul>
        <li v-for="(item,i) in lists" :key="i">
            <div class="l" @click="choose(item)">
            <img :src="item.img">
            </div>
            <div class="r">
            <div class="up">
                <div class="book" @click="choose(item)">
                {{item.name}}
                </div>
                <div class="author">{{item.author}}</div>
            </div>
            <div class="desc">
                {{item.desc}}
            </div>
            </div>
      </li>
    </ul>
    <router-view />
    </div>
</template>

<script>
import util from '../api/getData.js'

export default {
    data(){
        return {
            lists:[]
        }
    },
    created(){
        // 获取id，调用方法
        // created只会打印一次，所以要使用更新时beforeRouteUpdate
        // id是router.js动态路由设置的路径path:"/:id"
        let id=this.$route.params.id;
        // console.log(id)
        this._getNovelList(id);
    },
    // 路由更新,to是将要请求的路径对象
    beforeRouteUpdate(to,from,next){
        // console.log(to); 
        this._getNovelList(to.params.id);
        next()
    },
    // 真正处理方法的是写在methods里 
    methods: {
        _getNovelList(id){
            util.getNovelList(id).then(data=>{
                this.lists=data;
            }).catch(err=>{
                console.log(err)
            })
        },
        // 点击图片，名字跳转到详情页
        choose(item){
            // 切换路由到某小说列表组件
            console.log(item) //小说的详细信息:success(result)-->util.getNovelList(data)-->lists-->item
            // 使用编程式导航切换路由
            // let id=this.$route.params.id;
            this.$router.push({
                // path:`/${id}/${item.name}`,
                name:`chapter`,
                params:{
                    url:item.path,
                    name:item.name
                }
            });
        }
    },
}
</script>

<style scoped>
    .show{
    position: relative;
    padding-left: 200px;
    padding-right: 200px;
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10px;
  }
  li{
    width: 30%;
    height: 220px;
    overflow: hidden;
    margin-top: 10px;
    background-color: #e9faff;
  }
  .l,.r{
    float: left;
  }
  .l{
    width: 40%;
  }
  .r{
    width: 60%;
    padding-left: 5px;
  }
  img{
    width: 100%;
    height: 220px;
  }
  .book{
    font-size: 18px;
    color: #88C6E5;
  }
  .author{
    font-size: 14px;
  }
  .up{
    border-bottom: 1px dotted #6191d0;
    text-align: left;
  }
  .desc{
    font-size: 0.5em;
    clear: both;
  }

</style>
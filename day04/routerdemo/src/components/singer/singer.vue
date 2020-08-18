<template>
    <div>
       <h1>歌手列表</h1> 
       <ul>
           <li v-for='(s,k) in singers' :key='k' @click="choose(s.url)">{{s.name}}</li>
       </ul>
       <!-- 渲染出口 -->
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            singers:[
                {name:"刘德华",url:'ldh'},
                {name:"黎明",url:'lm'},
                {name:"郭富城",url:'gfc'},
                {name:"张学友",url:'zxy'},
            ]
        }
    },
    methods: {
        choose(url){
            // alert(url)
            // 使用编程式导航this.$router.push进行路由的跳转 
            /* 注意以下！！！
            1.router.push('home')  字符串
            2.router.push({ path: 'home' })  对象
            3.  用name就用params获取 用path就用query获取  如果是path，用params 会被忽略
                router.push({ name: 'user', params: { userId: '123' }})

                // 带查询参数，变成 /register?plan=private
                router.push({ path: 'register', query: { plan: 'private' }})
            */
 
            // this.$router.push(url)//相对路径有bug
            this.$router.push('/singer/'+url) //绝对路径
        }
    },
}
</script>

<style scoped>
    div{
        padding: 0 30%;
    }
    ul{
        list-style: none; 
        display: flex;
        justify-content: space-around;  
    } 
    li:hover{
        text-decoration: underline;
        color: rgb(92, 179, 145);   
        cursor: pointer;
    }
</style>
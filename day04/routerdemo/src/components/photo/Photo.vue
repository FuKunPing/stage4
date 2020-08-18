<template>
    <div>
        <!-- <router-link to='/photo/mkdir'>新建相册</router-link> |
        <router-link to='/photo/upload'>上传照片</router-link> -->
        <span @click="mkdir">新建相册</span>
        <span @click="upload">上传相册</span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        mkdir(){
            // this.$router.push('/photo/mkdir')
            // if(this.$route.path=='/photo/mkdir'){
            //     return ;
            // }
            //  导航到不同的 URL  push三种
            this.$router.push('mkdir')
        },
        upload(){
            // 解决多点几次报错的问题(因为点击第二次之后请求地址是一样的，所以会报错)
            let route=this.$route;
            if(route.path=='/photo/upload'){
                return ;
            }
            /* this.$router.push({
                name:"home",
                params:{a:1,b:2,c:3}
            }) */

            // 用path必须要用query传递获取参数
            this.$router.push({
                path:"/",
                // params:{a:1,b:2,c:3}
                query:{a:1,b:2,c:3}
            })
        }
    },
    // 实例创建之后，这个只会调用一次，第一次创建完成才会调用。
    created() {
        console.log(this)
    },
    // 进入路由组件之前，组件实例还没被创建this是undefined
    beforeRouteEnter (to,from,next) {
        console.log("------Enter-----")
        console.log(this) //undefined
        next(vm=>{
            // 使用回调函数方式获取当前组件 
            console.log(vm)//当前组件
        })
    },
    // 路由组件改变
    beforeRouteUpdate (to, from, next) {
        console.log("------Update-----")  
        console.log(this) //当前组件
        next()
    },
    // 离开路由组件
    beforeRouteLeave (to,from,next) {
        console.log("------Leave-----")
        console.log(this) //当前组件
        next()
    }
}
</script>

<style scoped>
span:hover{
    cursor: pointer;
    color: blue;
    text-decoration: underline;
}
</style>

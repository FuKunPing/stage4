<template>
    <div>
        <div class="con">
            <h2>{{$route.params.title}}</h2>
            <span class="close" @click="close">X</span>
            <p v-html='Content'></p>
        </div>
    </div>
</template>

<script>
import util from '../api/getData.js'

export default {
    data(){
        return {
            Content:""
        }
    },
    methods: {
        _Content(){
            let url=this.$route.params.url;
            util.getContent(url).then(data=>{
                // console.log(data); 文章内容
                this.Content=data
            })
        },
        close(){
        this.$router.go(-1)
        }
    },
    created() {
        this._Content()
    },
    

}
</script>

<style scoped>
    .con{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height:120%;
        z-index:999;
        margin: 0 auto;
        background: rgb(214, 241, 248);
        overflow: scroll;
    }
    .close{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 15px;
        right: 25px;
        cursor: pointer;
    }
</style>
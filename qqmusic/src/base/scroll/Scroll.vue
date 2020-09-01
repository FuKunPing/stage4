<template>
    <div ref="wrapper">
        <div>   
        <!-- 滚动的内容不固定，采用插槽来接收滚动的内容 -->
        <slot></slot>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    data(){
        return {
            scroll:null
        }   
    },
    methods: {
         // 初始化scroll对象
        _initScroll(){
            let div=this.$refs.wrapper;
            if(!div){
                // 没有该wrapper元素,则不创建
                return ;
            }
            this.scroll=new Bscroll(div,{
                click:true,
                probeType:2
            })
        },
        // 滚动的指定元素
        scrollToElement(ele){
            this.scroll && this.scroll.scrollToElement(ele,500)
        },
        // 滚动到顶部
        scrollToTop(){
            this.scroll && this.scroll.scrollToTop(0,0,500)
        },
        // 启用滚动条
        enable(){
            this.scroll && this,scroll.enable()
        }
    },
    // 挂载成功后调用初始化scroll对象的方法
    mounted() {
        // 在页面渲染成功之后再执行
        this.$nextTick(()=>{
        this._initScroll()
    })
  }
}
</script>
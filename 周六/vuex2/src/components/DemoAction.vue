<template>
    <div>
        <h1>Action</h1>
        <button @click="add">增加</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    // 使用辅助函数1
    // methods: mapActions(['increase']),

    // 使用辅助函数2
    methods: {
        ...mapActions(['increase']),
        add(){
            this.increase()
        }
    },

    // methods: {
    //     add(){
    //         // getters是派发事件给mutation执行的
    //         // 派发的是getters中定义的方法名
    //         // 在该方法中再提交给mutation
    //         // this.$store.dispatch('increase')
    //     }
    // },
}
</script>
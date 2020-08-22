<template>
    <div>
        <h1>Mutation</h1>
        <button @click="add">数字增加</button><br>
        <!-- <button @click="addNum">数字增加</button> -->
        <input type="text" v-model='fruit'>
        <button @click="buyFruit">添加水果</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            fruit:''
            }
    },
    // methods: {
    //     add(){
    //         // 方式1：this.$store.commit修改状态，通过mutation提交事件
    //         this.$store.commit('addNum')
    //     }
    // },
    // 方式二：使用辅助函数
    // methods:mapMutations(['addNum'])

    methods: {
        ...mapMutations(['addNum','addFruit']),
        // 方式二：辅助函数2：调用辅助函数中的方法
        add(){
            this.addNum()
        },
        buyFruit(){
            this.addFruit({
                fruit:this.fruit
            });
            this.fruit=''
        }
    },

    // methods: mapMutations({
    //     add:'addNum'
    // }),


}
</script>
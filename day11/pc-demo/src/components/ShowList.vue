<template>
    <div>
        <div class="index-board-list">
            <!-- 用数组绑定多个类名-->
            <!-- <div :class="['index-board-item',`index-board-${i}`]" v-for='(item,i) in list' :key="i"> -->
            <div :class="['index-board-item',board+i]" v-for='(item,i) in list' :key="i">
            <div class='index-board-item-inner'>
                <h2>{{item.title}}</h2>
                <p class="line-last">{{item.description}}</p>
                <el-button type="primary" :disabled='item.saleout' @click="buy(item)">立即购买</el-button>
            </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){ 
        return {
            board:'index-board-'
        }
    },
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
        buy(item){
            // 派发事件给父组件
            this.$emit('buyOne',item.title)
        }
    },
}
</script>
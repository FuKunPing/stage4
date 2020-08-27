<template>
    <div>
        <div class="index-board-list">
            <div :class="['index-board-item',`index-board-${i}`]" v-for='(item,i) in list' :key="i">
            <div class='index-board-item-inner' >
                <h2>{{item.title}}</h2>
                <p class="line-last">{{item.description}}</p>
                <el-button type="primary">立即购买</el-button>
            </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
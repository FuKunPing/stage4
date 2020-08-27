<template>
    <div>
        <h1>ELement-UI</h1>
        <h3>按钮</h3>
        <div>   
        <el-button type="success" @click="show">成功按钮</el-button>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        <el-button type="info" round>信息按钮</el-button>
        </div>
        <h3>Select</h3>
        <el-select v-model='num'>
            <el-option v-for='(item,idx) in arr' :key='idx' :value='item'></el-option>
        </el-select>
        <h3>messageBox消息框</h3>
        <!-- <el-button type="text" @click="open">弹出消息框</el-button> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
          arr:[
              1,2,3,4,5,6,7
          ],
          num:0
        }
    },
    methods: {
        show(){
            alert('success')
        },
        // 弹窗
        /* open(){
            this.$alert('消息内容', '标题', {
            confirmButtonText: '确定',
            });
        } */
    },
}
</script>
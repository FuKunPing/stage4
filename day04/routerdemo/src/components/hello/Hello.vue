<template>
    <div>
        <h1>这是Hello组件</h1>
        <button @click="add">xxx</button>
        <h2>{{num}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {num:1}
    },
    methods: {
        add(){
            this.num++
        }
    },
    /* beforeRouteEnter (to,from,next) {
        console.log("------Enter-----")
        next()
    },
    beforeRouteUpdate (to, from, next) {
        console.log("------Update-----")  
        next()
    },
    beforeRouteLeave (to,from,next) {
        console.log("------Leave-----")
        next()
    } */
}
</script>

<style scoped>
h1{
    color: red;
}
</style>
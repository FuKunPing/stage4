<template>
    <div>   
        <button @click="ac1">action1</button>

        <h1>{{num}}</h1>
    </div>
</template>

<script>
import {mapState,mapGetters, mapActions} from 'vuex'

export default {
    computed: {
        ...mapState(['num','stus']),
        ...mapGetters(['getStuNames','getStuById'])
    },
    methods: {
        ...mapActions(['actAdd']),
        ac1(){
            // 派发action事件: actAdd
            // this.$store.dispatch("actAdd");
            this.actAdd();
        }
    },
    
}
</script>


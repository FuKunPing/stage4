<template>
  <div>
    <h1>Getters</h1>
    <h3>使用$store</h3>
    {{$store.getters.square}}===
    {{$store.getters.getPs}}===
    {{$store.getters.getNames}}
    <h3>使用mapGetters</h3>
    {{square}}==={{getPs}}==={{getNames}}===平方： {{pingfang}}
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  // 简洁但是不灵活
  // computed: mapGetters(["square",'getPs','getNames'])
  
  // computed: mapGetters({
  //   pingfang: 'square'
  // })
  computed: {
    ...mapGetters(["square",'getPs','getNames']),
    ...mapGetters({
      pingfang: 'square'
    }),
  },
}
</script>
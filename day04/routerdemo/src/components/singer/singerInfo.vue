<template>
  <div>
    <h4>歌手信息</h4>
    <h5>{{info}}</h5>
  </div>
</template>

<script>
import { getSingerInfo } from '../../api/getSingerInfo'

export default {
  data() {
    return {
      info: ''
    }
  },
  created() {
    this.getSingerInfo(this.$route.params.url)
  },
  beforeRouteUpdate(to,from,next){
    console.log(to+','+from);
    this.getSingerInfo(to.params.url)
    next()
  },
  methods: {
    getSingerInfo(url){
      let name = '';
      switch(url){
        case "ldh": name="刘德华";break;
        case "zxy": name="张学友";break;
        case "gfc": name="郭富城";break;
        default: name="黎明"
      }
      getSingerInfo(name).then(data=>{
        this.info = data;
      })
    }
  },
}
</script>

<style scoped>
  
</style>
<template>
  <div>
    <router-link to="/shop/prod">商品列表</router-link> | 
    <router-link to="/shop/cart" class="mycart">
    我的购物车
    <div class="num">{{num}}</div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(["cartPro"]),
    num(){
      let num = 0;
      this.cartPro.forEach(val=>{
        num += val.count
      })
      return num
    }
  },
}
</script>

<style scoped>
  .mycart{
    position: relative;
  }
  .num{
    position: absolute;
    top: -10px;
    right: -10px;
    color: white;
    border-radius: 50%;
    background-color: lightcoral;
    width: 20px;
    height: 20px;
    line-height: 20px;
    opacity: 50%;
  }
</style>
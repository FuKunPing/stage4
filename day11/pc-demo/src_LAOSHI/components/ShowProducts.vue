<template>
  <div>
    <div class="index-board-list">
      <div :class="['index-board-item',board + idx]" v-for="(item,idx) in items" :key="idx">
        <div :class='inner'>
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <el-button class="btn" type="primary" :disabled="item.saleout" @click="buy(item)">点击购买</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inner: 'index-board-item-inner',
      board: 'index-board-'
    }
  },
  props: {
    items: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    buy(item){
      // 派发事件给父组件
      this.$emit("buyOne",item.title)
    }
  },
}
</script>

<style scoped>
  .btn{
    margin-top: 20px;
  }
</style>
<template>
  <div>
    <ul class='listNode'>
      <li v-for="(list,k) in lists" @click="send(list)" :key="k">{{list}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    send(item){
      this.$emit('toFather',item);
    }
  }
}
</script>

<style scoped>
.listNode {
  list-style: none;
  padding: 0;
  margin: 10px auto;
  width: 300px;
}
.listNode li {
  padding-left: 20px;
  color: #555;
  line-height: 30px;
  cursor: pointer;
}
.listNode li:hover {
  background: #BDBCBC;
}
</style>
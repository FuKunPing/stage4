<template>
  <div>
    <ul>
      <li v-for="(item,idx) in list" :key="idx" class="new-item">
        <a :href="item.url">
          {{item.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import util from '../api/util'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    _getList(){
      util.getData().then(data=>{
        this.list = data
      })
    }
  },
  created() {
    this._getList()
  }
}
</script>
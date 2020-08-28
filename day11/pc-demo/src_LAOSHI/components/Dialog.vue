<template>
  <div>
    <transition name="drop">
      <div class="dialog-wrap">
        <!-- 遮罩层 -->
        <div class="dialog-cover"></div>
        <!-- 弹出框的动画效果 -->
        <div class="dialog-content" >
          <p class="dialog-close" @click="close">x</p>
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  methods: {
    close(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 40%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -20%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
<template>
  <transition name="toast-fade">
    <div class="toast" v-show="visible">{{message}}</div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      position: 'center',
      message: '',
      duration: 1500,
      visible: false
    };
  }
};
</script>

<style lang='scss' scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 17px 32px;
  font-size: 28px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
}
.toast-fade-enter {
    opacity: 0;
    transform: translate3d(-50%, -10px, 0);
}

.toast-fade-enter-active {
    will-change: transform;
    transition: all .2s;
}

.toast-fade-enter-to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
}
</style>

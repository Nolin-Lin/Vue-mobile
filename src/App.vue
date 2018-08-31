<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
        <!-- <keep-alive> -->
          <router-view/>
        <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(document.body.offsetHeight);
  }
};
</script>
<style lang="scss">
  @import "./style/common.css";
  #app{
    // height: 100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>

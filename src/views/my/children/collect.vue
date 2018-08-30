<template>
  <div class="collect">
    <NavBar title="收藏"></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    NavBar
  }
};
</script>

<style lang='scss' scoped>
.collect {
  height: 100%;
  background-color: #fff;
}
</style>

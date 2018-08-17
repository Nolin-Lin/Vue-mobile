<template>
  <div>
      <div class="search-input">
          <input type="text" placeholder="请输入关键字">
      </div>
      <footBar></footBar>
  </div>
</template>

<script>
import footBar from '@/components/footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    footBar
  }
};
</script>

<style lang='scss' scoped>

</style>

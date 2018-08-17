<template>
  <div>
      <div class="index">
          <div class="index-item">
              <img src="@/assets/banner.jpeg">
          </div>
          <div class="index-item">
              <img src="@/assets/banner.jpeg">
          </div>
          <div class="index-item">
              <img src="@/assets/banner.jpeg">
          </div>
          <div class="index-item">
              <img src="@/assets/banner.jpeg">
          </div>
          <div class="index-item">
              <img src="@/assets/banner.jpeg">
          </div>
          <div class="index-item">
              <img src="@/assets/banner.jpeg">
          </div>
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
    .index{
        padding: 0 32px;
        .index-item{
            width: 100%;
            height: 321px;
            margin-top: 32px;
            overflow: hidden;
            border-radius: 6px;
            box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.25);
        }
    }
</style>

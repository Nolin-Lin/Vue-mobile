<template>
  <div>
    <div class="index">
      <NavBar title="首页" style="margin: 0 -16px;"></NavBar>
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
    <totop></totop>
    <footBar></footBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import footBar from '@/components/footer.vue';
import totop from '@/components/ToTop.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    footBar,
    totop,
    NavBar
  }
};
</script>

<style lang='scss' scoped>
.index {
  padding: 0 32px;
  .index-item {
    width: 100%;
    height: 321px;
    margin-top: 32px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.25);
  }
}
</style>

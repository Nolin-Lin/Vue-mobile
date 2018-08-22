<template>
  <div class="totop" @click="totop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-huidaodingbu"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    totop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang='scss' scoped>
.totop {
  position: fixed;
  bottom: 117px;
  right: 16px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: 1px solid #ebebeb;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>

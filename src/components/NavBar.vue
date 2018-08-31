<template>
  <div class="nav">
    <div class="nav-svg" @click="back">
      <svg aria-hidden="true" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
    </div>
    <div class="nav-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
.nav{
  position: relative;
  padding: 21px 31px;
  background-color: #373A3F;
  border-bottom: 1px solid #ebebeb;
  color: #fff;

  &-svg{
    width: 25px;
    height: 46px;
  }
  &-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-weight: 600;
  }
}
</style>

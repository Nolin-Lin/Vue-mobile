<template>
  <div class="set">
    <NavBar title="个人资料"></NavBar>
    <div class="set-input">
      <input type="text" placeholder="输入新昵称">
    </div>
    <div class="set-btn">确定</div>
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
.set {
  &-input {
    padding: 0 32px;
    background-color: #fff;
    input {
      width: 100%;
      padding: 24px 0;
      border: 0;
      font-size: 28px;
      color: #455563;
      &::-webkit-input-placeholder {
        color: #b2c0c8;
      }
      &:-moz-placeholder {
        color: #b2c0c8;
      }
      &::-moz-placeholder {
        color: #b2c0c8;
      }
      &:-ms-input-placeholder {
        color: #b2c0c8;
      }
    }
  }
  &-btn {
    padding: 28px 0;
    margin: 100px 32px 0;
    text-align: center;
    font-size: 32px;
    color: #fff;
    border-radius: 6px;
    background: #f6a11c;
  }
}
</style>

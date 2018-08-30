<template>
  <div class="set">
    <NavBar title="个人资料"></NavBar>
    <div class="set-input" v-if="!ifnew">
      <input type="password" placeholder="请输入旧密码">
    </div>
    <div class="set-input" v-else>
      <input type="password" placeholder="请设置新密码">
    </div>
    <div class="set-btn">下一步</div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      ifnew: false
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

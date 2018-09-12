<template>
  <div class="login">
    <div class="input-item">
      <input type="text" placeholder="请输入角色" v-model="loginForm.role">
    </div>
    <div class="input-item">
      <input type="number" placeholder="验证码" v-model="loginForm.vcCode">
      <div class="input-btn">获取验证码</div>
    </div>
    <div class="login-btn" @click="login">登录</div>
    <div class="login-tip">
      <div>角色：store, factory, seller, user</div>
      <div>验证码：随意</div>
    </div>
  </div>
</template>

<script>
import { validateusername } from '@/utils/validate';

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        role: 'user',
        vcCode: 1234
      }
    };
  },
  methods: {
    login() {
      if (validateusername(this.loginForm.role)) {
        this.$toast('登录成功');
        this.$router.replace({ path: '/index' });
      }
    }
  }
};
</script>

<style lang="scss">
  html, body{
    height: 100%;
    #app{
      height: 100%;
    }
  }
  .login{
    height: 100%;
    padding: 0 32px;
    padding-top: 405px;
    background-color: #384655;
    .input-item{
      display: flex;
      align-items: center;
      height: 98px;
      line-height: 98px;
      margin-bottom: 44px;
      border-radius: 6px;
      background-color: #fff;
      overflow: hidden;
      &:last-child{
        margin-bottom: 0;
      }
      input{
        width: 100%;
        height: 100%;
        padding: 0 32px;
        background-color: transparent;
        border: 0;
        font-size: 32px;
        color: #455563;
        ::-webkit-input-placeholder{
          color: #B2C0C8;
        }
      }
      .input-btn{
        min-width: 180px;
        padding: 30px 0;
        background-color: #F6A11C;
        color: #fff;
        font-size: 32px;
        text-align: center;
      }
    }
    .login-btn{
      width: 100%;
      padding: 24px 0;
      color: #fff;
      font-size: 36px;
      text-align: center;
      background-color: #F6A11C;
      border-radius: 6px;
    }
    .login-tip{
      margin-top: 20px;
      line-height: 80px;
      font-size: 32px;
      color: #fff;
    }
  }
</style>

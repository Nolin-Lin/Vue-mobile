<template>
  <div class="login">
    <div class="input-item">
      <input type="text" placeholder="手机号码">
    </div>
    <div class="input-item">
      <input type="password" placeholder="验证码">
      <div class="input-btn">获取验证码</div>
    </div>
    <div class="login-btn">完成</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
    };
  },
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
      margin-bottom: 44px;
      border-radius: 6px;
      background-color: #fff;
      &:last-child{
        margin-bottom: 0;
      }
      input{
        width: 100%;
        height: 100%;
        padding: 26px 32px;
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
        max-width: 180px;
        padding: 26px 0;
        height: 100%;
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
  }
</style>

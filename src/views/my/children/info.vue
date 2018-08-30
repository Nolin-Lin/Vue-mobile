<template>
  <div class="info">
    <NavBar title="个人资料"></NavBar>
    <div class="info-card">
      <div class="info-card-item">
        <div class="info-card-left">头像</div>
        <div class="info-card-right">
          <div class="info-avatar">
            <img src="@/assets/avatar.png">
          </div>
          <div class="info-card-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-right-arrow"></use>
            </svg>
          </div>
        </div>
      </div>
      <router-link tag="div" to="setusername" class="info-card-item">
        <div class="info-card-left">昵称</div>
        <div class="info-card-right">
          <div class="info-cont">苏小杰</div>
          <div class="info-card-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-right-arrow"></use>
            </svg>
          </div>
        </div>
      </router-link>
    </div>
    <div class="info-card">
      <div class="info-card-item">
        <div class="info-card-left">用户角色</div>
        <div class="info-card-right">
          <div class="info-cont">销售员</div>
          <div class="info-card-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-right-arrow"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="info-card-item">
        <div class="info-card-left">归属门店</div>
        <div class="info-card-right">
          <div class="info-cont">择美优配</div>
          <div class="info-card-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-right-arrow"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="info-card-item">
        <div class="info-card-left">代理厂商</div>
        <div class="info-card-right">
          <div class="info-cont">择美优配</div>
          <div class="info-card-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-right-arrow"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="info-card">
      <router-link tag="div" to="setpassword" class="info-card-item">
        <div class="info-card-left">修改密码</div>
        <div class="info-card-right">
          <div class="info-card-svg">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-right-arrow"></use>
            </svg>
          </div>
        </div>
      </router-link>
    </div>
    <div class="info-btn">退出登陆</div>
  </div>
</template>

<script>
import '@/js/iconfont.min';
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
.info {
  &-card {
    margin-bottom: 26px;
    background-color: #fff;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 32px;
      border-bottom: 1px solid #ebebeb;
      &:last-child {
        border-bottom: 0;
      }
    }
    &-left {
      font-size: 28px;
      color: #b2c0c8;
    }
    &-right {
      display: flex;
      align-items: center;
      .info-avatar {
        width: 88px;
        height: 88px;
        border-radius: 44px;
      }
      .info-card-svg {
        width: 26px;
        height: 48px;
        margin-left: 32px;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      .info-cont {
        color: #455563;
      }
    }
  }
  &-btn{
    padding: 28px 0;
    margin: 100px 32px 0;
    text-align: center;
    font-size: 32px;
    color: #fff;
    border-radius:6px;
    background:#F6A11C;
  }
}
</style>

<template>
  <footer>
    <ul class="footer-warp">
      <router-link tag="li" to="/index" class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use
              :xlink:href=" `#icon-index${$route.path.indexOf('index') !== -1? '-active' : ''}` "
            ></use>
          </svg>
        </div>
        <div class="footer-text">首页</div>
      </router-link>
      <router-link tag="li" to="/shop" class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use
              :xlink:href="
                $route.path.indexOf('shop') !== -1? '#icon-goods-active' : '#icon-goods'
              "
            ></use>
          </svg>
        </div>
        <div class="footer-text">商品库</div>
      </router-link>
      <router-link tag="li" to="/order" class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use
              :xlink:href="
                $route.path.indexOf('order') !== -1? '#icon-order-active' : '#icon-order'
              "
            ></use>
          </svg>
        </div>
        <div class="footer-text">订单管理</div>
      </router-link>
      <router-link tag="li" to="/msg" class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use
              :xlink:href="
                $route.path.indexOf('msg') !== -1? '#icon-message-active' : '#icon-message'
              "
            ></use>
          </svg>
        </div>
        <div class="footer-text">通知</div>
      </router-link>
      <router-link tag="li" to="/my" class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use
              :xlink:href="
                $route.path.indexOf('my') !== -1? '#icon-my-active' : '#icon-my'
              "
            ></use>
          </svg>
        </div>
        <div class="footer-text">我的</div>
      </router-link>
    </ul>
  </footer>
</template>

<script>
import '@/js/iconfont.min';

export default {
  data() {
    return {
    };
  }
};
</script>

<style lang='scss'>
#app{padding-bottom: 148px;overflow: hidden;}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.25);
  .footer-warp {
    display: flex;
    align-items: center;
    .footer-item {
      width: 100%;
      padding: 6px 0;
      text-align: center;
      color: #b2c0c8;
      font-size: 28px;
      .footer-svg {
        width: 46px;
        height: 46px;
        margin: 0 auto 10px;
        svg{
          width: 100%;
          height: 100%;
        }
      }
    }
    .router-link-active {
      color: #f8b449;
    }
  }
}
</style>

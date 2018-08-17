<template>
  <footer>
    <ul class="footer-warp">
      <li class="footer-item active">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-index-active"></use>
          </svg>
        </div>
        <div class="footer-text">首页</div>
      </li>
      <li class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-goods"></use>
          </svg>
        </div>
        <div class="footer-text">商品库</div>
      </li>
      <li class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-order"></use>
          </svg>
        </div>
        <div class="footer-text">订单管理</div>
      </li>
      <li class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-order"></use>
          </svg>
        </div>
        <div class="footer-text">通知</div>
      </li>
      <li class="footer-item">
        <div class="footer-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-my"></use>
          </svg>
        </div>
        <div class="footer-text">我的</div>
      </li>
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
      padding: 10px 0;
      text-align: center;
      color: #b2c0c8;
      font-size: 28px;
      .footer-svg {
        width: 48px;
        height: 48px;
        margin: 0 auto 10px;
        svg{
          width: 100%;
          height: 100%;
        }
      }
    }
    .active {
      color: #f8b449;
    }
  }
}
</style>

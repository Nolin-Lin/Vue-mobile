<template>
  <div class="goodsdetail">
    <NavBar title="商品详情" style="position: relative;z-index: 999;"></NavBar>
    <swiper :options="swiperOption">
      <swiperSlide><img src="@/assets/goods-img.png"></swiperSlide>
      <swiperSlide><img src="@/assets/goods-img.png"></swiperSlide>
      <swiperSlide><img src="@/assets/goods-img.png"></swiperSlide>
      <swiperSlide><img src="@/assets/goods-img.png"></swiperSlide>
      <swiperSlide><img src="@/assets/goods-img.png"></swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="goodsdetail-info">
      <div class="goodsdetail-info-title">北欧四角椅</div>
      <div class="goodsdetail-info-price">¥4888</div>
      <ul class="goodsdetail-more">
        <li class="goodsdetail-more-item">
          <div class="goodsdetail-more-name">品牌</div>
          <div class="goodsdetail-more-val">择美优配</div>
        </li>
        <li class="goodsdetail-more-item">
          <div class="goodsdetail-more-name">编号</div>
          <div class="goodsdetail-more-val">¥FZ002300</div>
        </li>
        <li class="goodsdetail-more-item">
          <div class="goodsdetail-more-name">颜色</div>
          <div class="goodsdetail-more-val">粉色,蓝色</div>
        </li>
        <li class="goodsdetail-more-item">
          <div class="goodsdetail-more-name">尺寸</div>
          <div class="goodsdetail-more-val">600*600*600</div>
        </li>
        <li class="goodsdetail-more-item">
          <div class="goodsdetail-more-name">货期</div>
          <div class="goodsdetail-more-val">0天</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  components: {
    NavBar,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
  .swiper-container{
    height: 540px;
    overflow: hidden;
    .swiper-pagination-bullet{
      width: 14px;
      height: 14px;
      background-color: #EBEBEB;
    }
    .swiper-pagination-bullet-active{
      background-color: #B2C0C8;
    }
  }
  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 15px;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets{
    bottom: 36px;
  }
  .goodsdetail-info{
    padding: 44px 32px 0;
    box-sizing: border-box;
    text-align: center;
    &-title{
      color: #384655;
      font-size: 40px;
    }
    &-price{
      color: #F6A11C;
      font-size: 36px;
      margin: 16px 0 32px;
    }
  }
  .goodsdetail-more{
    &-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
      border-bottom: 1px solid #EBEBEB;
      &:last-child{
        border-bottom: 0;
      }
    }
    &-name{
      color: #B2C0C8;
      font-size: 36px;
    }
    &-val{
      color: #384655;
      font-size: 36px;
    }
  }
</style>

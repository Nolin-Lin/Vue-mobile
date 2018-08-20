<template>
  <div class="shop">
      <div class="search-input">
          <input type="text" placeholder="请输入关键字">
      </div>
      <div class="shop-banner">
        <img src="@/assets/banner.jpeg">
      </div>
      <ul class="shop-classify">
        <li class="shop-classify-item active">
          <span>品牌</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down-arrow-active"></use>
          </svg>
        </li>
        <li class="shop-classify-item">
          <span>风格</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down-arrow"></use>
          </svg>
        </li>
        <li class="shop-classify-item">
          <span>空间</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down-arrow"></use>
          </svg>
        </li>
        <li class="shop-classify-item">
          <span>品类</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down-arrow"></use>
          </svg>
        </li>
        <li class="shop-classify-item">
          <span>模型</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down-arrow"></use>
          </svg>
        </li>
      </ul>
      <ul class="shop-goods">
        <li class="shop-goods-item">
          <div class="shop-goods-img">
            <img src="@/assets/banner.jpeg">
          </div>
          <div class="shop-goods-info">
            <div class="shop-goods-name">择美优配 四角椅</div>
            <div class="shop-goods-price">
              <span>¥3777</span>
              <span class="shop-goods-tab">打折</span>
            </div>
          </div>
        </li>
        <li class="shop-goods-item">
          <div class="shop-goods-img">
            <img src="@/assets/banner.jpeg">
          </div>
          <div class="shop-goods-info">
            <div class="shop-goods-name">择美优配 四角椅</div>
            <div class="shop-goods-price">
              <span>¥3777</span>
              <span class="shop-goods-tab">打折</span>
            </div>
          </div>
        </li>
        <li class="shop-goods-item">
          <div class="shop-goods-img">
            <img src="@/assets/banner.jpeg">
          </div>
          <div class="shop-goods-info">
            <div class="shop-goods-name">择美优配 四角椅</div>
            <div class="shop-goods-price">
              <span>¥3777</span>
              <span class="shop-goods-tab">打折</span>
            </div>
          </div>
        </li>
        <li class="shop-goods-item">
          <div class="shop-goods-img">
            <img src="@/assets/banner.jpeg">
          </div>
          <div class="shop-goods-info">
            <div class="shop-goods-name">择美优配 四角椅</div>
            <div class="shop-goods-price">
              <span>¥3777</span>
              <span class="shop-goods-tab">打折</span>
            </div>
          </div>
        </li>
      </ul>
      <totop></totop>
      <footBar></footBar>
  </div>
</template>

<script>
import footBar from '@/components/footer.vue';
import totop from '@/components/ToTop.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    footBar,
    totop
  }
};
</script>

<style lang='scss' scoped>
  .shop{
    overflow: hidden;
    padding: 0 16px;
    .search-input{
      margin: 13px 0 16px;
      border: 1px solid #EBEBEB;
      border-radius: 6px;
      input{
        width: 100%;
        border: 0;
        text-align: center;
        font-size: 28px;
        padding: 12px 0;
      }
    }
    .shop-banner{
      height: 311px;
      border-radius: 4px;
      overflow: hidden;
    }
    .shop-classify{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 32px -4px;
      .shop-classify-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 12px;
        padding: 12px 0;
        text-align: center;
        color: #455563;
        background-color: #F9F9F9;
        svg{
          width: 36px;
          height: 30px;
        }
      }
      .active{
        color: #F6A11C;
      }
    }
    .shop-goods{
      display: flex;
      flex-wrap: wrap;
      .shop-goods-item{
        width: 48.8%;
        margin: 0 16px 32px 0;
        box-sizing: border-box;
        &:nth-child(2n){
          margin-right: 0;
        }
        .shop-goods-img{
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
        }
        .shop-goods-info{
          margin-top: 24px;
          padding-left: 16px;
          color: #455563;
          font-size: 28px;
          .shop-goods-price{
            margin-top: 14px;
            color: #F6A11C;
          }
          .shop-goods-tab{
            padding: 4px 16px;
            margin-left: 11px;
            color: #F6A11C;
            font-size: 24px;
            background: #FFD89B;
            border-radius: 6px;
          }
        }
      }
    }
  }
</style>

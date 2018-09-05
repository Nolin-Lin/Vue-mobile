<template>
  <div class="shop">
    <div class="search-input">
      <input type="text" placeholder="请输入关键字">
    </div>
    <div class="shop-banner">
      <img src="@/assets/shop-banner.png">
    </div>
    <div class="classify-warp">
      <classify></classify>
    </div>
    <ul class="shop-goods">
      <router-link to="/detail" tag="li" class="shop-goods-item">
        <div class="shop-goods-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="shop-goods-info">
          <div class="shop-goods-name">择美优配 四角椅</div>
          <div class="shop-goods-price">
            <span>¥3777</span>
            <span class="shop-goods-tab">打折</span>
          </div>
        </div>
      </router-link>
      <li class="shop-goods-item">
        <div class="shop-goods-img">
          <img src="@/assets/goods-img.png">
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
          <img src="@/assets/goods-img.png">
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
          <img src="@/assets/goods-img.png">
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
          <img src="@/assets/goods-img.png">
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
          <img src="@/assets/goods-img.png">
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
          <img src="@/assets/goods-img.png">
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
          <img src="@/assets/goods-img.png">
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
import classify from '@/components/classify.vue';
import totop from '@/components/ToTop.vue';
import footBar from '@/components/footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    footBar,
    totop,
    classify
  }
};
</script>

<style lang='scss' scoped>
.shop {
  position: relative;
  overflow: hidden;
  padding: 404px 16px 0;
  .search-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 13px 16px 16px;
    box-sizing: border-box;
    z-index: 999;
    background-color: #fff;
    input {
      width: 100%;
      border: 1px solid #ebebeb;
      border-radius: 6px;
      text-align: center;
      font-size: 28px;
      padding: 12px 0;
    }
  }
  &-banner {
    position: absolute;
    top: 93px;
    left: 0;
    width: 100%;
    height: 311px;
    padding: 0 16px;
    box-sizing: border-box;
    z-index: 999;
    background-color: #fff;
    overflow: hidden;
    img {
      border-radius: 4px;
    }
  }
  &-goods {
    display: flex;
    flex-wrap: wrap;
    .shop-goods-item {
      width: 48.8%;
      margin: 0 16px 32px 0;
      box-sizing: border-box;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .shop-goods-img {
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
      }
      .shop-goods-info {
        margin-top: 24px;
        padding-left: 16px;
        color: #455563;
        font-size: 28px;
        .shop-goods-price {
          margin-top: 14px;
          color: #f6a11c;
        }
        .shop-goods-tab {
          padding: 4px 16px;
          margin-left: 11px;
          color: #f6a11c;
          font-size: 24px;
          background: #ffd89b;
          border-radius: 6px;
        }
      }
    }
  }
}
.classify-warp{
  margin: 0 -16px;
}
</style>

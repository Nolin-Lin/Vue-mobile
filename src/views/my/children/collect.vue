<template>
  <div class="collect">
    <NavBar title="收藏" style="position: relative;z-index: 999;"></NavBar>
    <div class="collect-tap" style="position: relative;z-index: 999;">
      <div class="collect-tap-item active">单品</div>
      <div class="collect-tap-item">案例</div>
    </div>
    <classify :classifyTab="classifyTab"></classify>
    <ul class="shop-goods" v-if="ifcase">
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
    <ul class="collect-case">
      <li class="case-item">
        <div class="case-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-info">
          <div class="case-info-name">北欧客厅风格</div>
          <div>
            <span class="case-info-tab">客厅</span>
            <span class="case-info-tab">中式</span>
          </div>
        </div>
      </li>
      <li class="case-item">
        <div class="case-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-info">
          <div class="case-info-name">北欧客厅风格</div>
          <div>
            <span class="case-info-tab">客厅</span>
            <span class="case-info-tab">中式</span>
          </div>
        </div>
      </li>
      <li class="case-item">
        <div class="case-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-info">
          <div class="case-info-name">北欧客厅风格</div>
          <div>
            <span class="case-info-tab">客厅</span>
            <span class="case-info-tab">中式</span>
          </div>
        </div>
      </li>
      <li class="case-item">
        <div class="case-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-info">
          <div class="case-info-name">北欧客厅风格</div>
          <div>
            <span class="case-info-tab">客厅</span>
            <span class="case-info-tab">中式</span>
          </div>
        </div>
      </li>
    </ul>
    <totop></totop>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import classify from '@/components/classify.vue';
import totop from '@/components/ToTop.vue';

export default {
  data() {
    return {
      ifcase: false,
      classifyTab: [
        {
          name: '风格',
          class: 'shop-classify-item',
          icon: '#icon-down-arrow'
        },
        {
          name: '空间',
          class: 'shop-classify-item',
          icon: '#icon-down-arrow'
        },
        {
          name: '模型',
          class: 'shop-classify-item',
          icon: '#icon-down-arrow'
        }
      ]
    };
  },
  components: {
    NavBar,
    classify,
    totop
  }
};
</script>

<style lang='scss' scoped>
.collect {
  height: 100%;
  background-color: #fff;
  &-tap{
    display: flex;
    align-items: center;
    padding: 0 33px;
    border-bottom: 1px solid #EBEBEB;
    background-color: #fff;
    &-item{
      width: 100%;
      padding: 16px 0;
      color: #455563;
      font-size: 28px;
      text-align: center;
    }
    .active{
      color: #F6A11C;
      border-bottom: 4px solid #F6A11C;
    }
  }
}
.shop-goods, .collect-case{
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  &-item, .case-item {
    width: 48.8%;
    margin: 0 16px 32px 0;
    box-sizing: border-box;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  &-img {
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
  }
  &-info {
    margin-top: 24px;
    padding-left: 16px;
    color: #455563;
    font-size: 28px;
  }
  &-price {
    margin-top: 14px;
    color: #f6a11c;
  }
  &-name, &-price{
    font-weight: 600;
  }
  &-tab {
    padding: 4px 16px;
    margin-left: 11px;
    color: #f6a11c;
    font-size: 24px;
    background: #ffd89b;
    border-radius: 6px;
  }
}
.case-img{
  width: 100%;
  height: 212px;
  overflow: hidden;
  margin-bottom: 24px
}
.case-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-name{
    padding-left: 16px;
    font-size: 28px;
    color: #455563;
  }
  &-tab{
    margin-right: 16px;
    font-size: 24px;
    color: #B2C0C8;
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>

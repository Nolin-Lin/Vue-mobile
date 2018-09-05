<template>
  <div class="c_detail">
    <NavBar title="案例详情"></NavBar>
    <div class="case-who">销售员：苏小杰，13242567899</div>
    <div class="case-img">
      <img src="@/assets/goods-img.png">
    </div>
    <div class="case-info">
      <div class="case-name">北欧简约客厅</div>
      <div class="case-price"><span>¥13888</span><span class="case-price-tab">清单总价</span></div>
    </div>
    <div class="case-tab">
      <div class="case-tab-item active">
        <div class="case-tab-img">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-scenes-intro"></use>
          </svg>
        </div>
        <div>场景介绍</div>
      </div>
      <div class="case-tab-item">
        <div class="case-tab-img">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-product-list"></use>
          </svg>
        </div>
        <div>商品清单</div>
      </div>
    </div>
    <div class="case-author" v-if="isauthor">
      <div class="case-author-info">
        <div class="case-author-avatar">
          <img src="@/assets/goods-img.png">
        </div>
        <div>
          <div class="case-author-name">唯爱</div>
          <div class="case-author-time">创作于：02-26</div>
        </div>
      </div>
      <div class="case-author-desc">设计灵感：无</div>
      <div>
        <span class="case-author-tag" style="background: #7E8E98;"># 场景信息</span>
        <span class="case-author-tag">一室一厅</span>
        <span class="case-author-tag">北欧风</span>
        <span class="case-author-tag">卧室</span>
      </div>
    </div>
    <ul class="case-goods" v-else>
      <li class="case-goods-item">
        <div class="case-goods-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-goods-info">
          <div class="case-goods-name">北欧四角椅</div>
          <div class="case-goods-price">¥3777</div>
        </div>
        <div class="case-goods-num">1</div>
      </li>
      <li class="case-goods-item">
        <div class="case-goods-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-goods-info">
          <div class="case-goods-name">北欧四角椅</div>
          <div class="case-goods-price">¥3777</div>
        </div>
        <div class="case-goods-num">1</div>
      </li>
      <li class="case-goods-item">
        <div class="case-goods-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-goods-info">
          <div class="case-goods-name">北欧四角椅</div>
          <div class="case-goods-price">¥3777</div>
        </div>
        <div class="case-goods-num">1</div>
      </li>
      <li class="case-goods-item">
        <div class="case-goods-img">
          <img src="@/assets/goods-img.png">
        </div>
        <div class="case-goods-info">
          <div class="case-goods-name">北欧四角椅</div>
          <div class="case-goods-price">¥3777</div>
        </div>
        <div class="case-goods-num">1</div>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      isauthor: false
    };
  },
  components: {
    NavBar
  }
};
</script>

<style lang='scss' scoped>
  .case{
    &-who{
      padding: 16px 0;
      color: #fff;
      text-align: center;
      background: #F6A11C;
    }
    &-img{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 582px;
      overflow: hidden;
    }
    &-info{
      position: relative;
      margin-top: -46px;
      padding: 48px 0 32px;
      text-align: center;
      background: #fff;
      border-radius:46px 46px 0px 0px;
      border-bottom: 1px solid #EBEBEB;
    }
    &-name{
      color: #384655;
      font-size: 40px;
    }
    &-price{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      color: #F6A11C;
      font-size:36px;
      &-tab{
        padding: 4px 8px;
        margin-left: 16px;
        font-size:18px;
        color: #F6A11C;
        background: #FFD89B;
        border-radius:6px;
      }
    }
    &-tab{
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 50px;
      &-item{
        width: 122px;
        padding: 25px 0 21px;
        text-align: center;
        color: #7E8E98;
      }
      .active{
        border-bottom: 4px solid #7E8E98;
      }
      &-img{
        width: 32px;
        height: 32px;
        margin: 0 auto 10px;
        svg{
          width: 100%;
          height: 100%;
        }
      }
    }
    &-author{
      padding: 0 32px;
      &-info{
        display: flex;
        align-items: center;
        margin-bottom: 32px;
      }
      &-avatar{
        width: 88px;
        height: 88px;
        border-radius: 88px;
        margin-right: 32px;
        overflow: hidden;
      }
      &-name{
        margin-bottom: 10px;
        color: #F6A11C;
        font-size:32px;
      }
      &-time{
        color: #7E8E98;
        font-size:24px;
      }
      &-desc{
        padding: 16px;
        margin-bottom: 43px;
        background: #F9F9F9;
        color: #455563;
        font-size:28px;
      }
      &-tag{
        margin-right: 32px;
        padding: 6px 16px;
        color: #fff;
        background-color: #F6A11C;
        border-radius:6px;
      }
    }
    &-goods{
      display: flex;
      flex-wrap: wrap;
      padding: 0 19px;
      &-item{
        position: relative;
        width: 46.3%;
        box-sizing: border-box;
        margin: 0 13px 26px;
        border-radius:6px;
        box-shadow:0px 2px 11px 0px rgba(126,142,152,0.14);
      }
      &-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32px 16px;
      }
      &-name{
        color: #7E8E98;
        font-size: 28px;
      }
      &-price{
        color: #F6A11C;
        font-size: 28px;
      }
      &-num{
        position: absolute;
        top: 16px;
        right: 16px;
        width:40px;
        height:40px;
        text-align: center;
        line-height: 40px;
        color: #7E8E98;
        background: #EFF3F6;
        border-radius:6px;
      }
    }
  }
</style>

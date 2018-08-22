<template>
  <div class="shop">
      <div class="search-input">
          <input type="text" placeholder="请输入关键字">
      </div>
      <div class="shop-banner">
        <img src="@/assets/shop-banner.png">
      </div>
      <ul class="shop-classify">
        <li
          :class="item.class"
          v-for="(item, index) in classifyTab"
          :key="index" @click="tabfun(index)"
        >
          <span>{{item.name}}</span>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </li>
      </ul>
      <div class="classify-popup-warp" v-if="classifyShow">
        <ul
          class="classify-popup"
          v-if="popup.show"
          v-for="(popup, index) in classifyItem"
          :key="index"
        >
          <li
            v-for="(item, key) in popup.cont"
            :key="key"
            :class="item.class"
            @click="itemfun(key)"
          >
            <span>{{item.name}}</span>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="classify-popup-mark" v-if="classifyShow" @click="popupHide"></div>
      <ul class="shop-goods">
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
      classifyTab: [
        {
          name: '品牌',
          class: 'shop-classify-item',
          icon: '#icon-down-arrow'
        },
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
          name: '品类',
          class: 'shop-classify-item',
          icon: '#icon-down-arrow'
        },
        {
          name: '模型',
          class: 'shop-classify-item',
          icon: '#icon-down-arrow'
        }
      ],
      classifyItem: [
        {
          show: true,
          cont: [
            {
              class: 'classify-popup-item active',
              name: '择美优配1-1',
              icon: '#icon-icon-yes-active'
            },
            {
              class: 'classify-popup-item',
              name: '择美优配1-2',
              icon: '#icon-icon-yes'
            }
          ]
        },
        {
          show: false,
          cont: [
            {
              class: 'classify-popup-item active',
              name: '择美优配2-1',
              icon: '#icon-icon-yes-active'
            },
            {
              class: 'classify-popup-item',
              name: '择美优配2-2',
              icon: '#icon-icon-yes'
            }
          ]
        },
        {
          show: false,
          cont: [
            {
              class: 'classify-popup-item active',
              name: '择美优配3-1',
              icon: '#icon-icon-yes-active'
            },
            {
              class: 'classify-popup-item',
              name: '择美优配3-2',
              icon: '#icon-icon-yes'
            }
          ]
        },
        {
          show: false,
          cont: [
            {
              class: 'classify-popup-item active',
              name: '择美优配4-1',
              icon: '#icon-icon-yes-active'
            },
            {
              class: 'classify-popup-item',
              name: '择美优配4-2',
              icon: '#icon-icon-yes'
            }
          ]
        },
        {
          show: false,
          cont: [
            {
              class: 'classify-popup-item active',
              name: '择美优配5-1',
              icon: '#icon-icon-yes-active'
            },
            {
              class: 'classify-popup-item',
              name: '择美优配5-2',
              icon: '#icon-icon-yes'
            }
          ]
        }
      ],
      classifyShow: false,
      whichTab: 0
    };
  },
  components: {
    footBar,
    totop
  },
  methods: {
    tabfun(i) {
      this.classifyTab.forEach((item, index) => {
        const val = item;
        if (index === i) {
          this.whichTab = i;
          val.class = 'shop-classify-item active';
          val.icon = '#icon-down-arrow-active';
          this.classifyItem[i].show = true;
          this.classifyShow = true;
        } else {
          // console.log(item, index);
          val.class = 'shop-classify-item';
          val.icon = '#icon-down-arrow';
          this.classifyItem[index].show = false;
        }
      });
    },
    itemfun(i) {
      this.classifyItem[this.whichTab].cont.forEach((item, index) => {
        const val = item;
        if (index === i) {
          val.class = 'classify-popup-item active';
          val.icon = '#icon-icon-yes-active';
        } else {
          val.class = 'classify-popup-item';
          val.icon = '#icon-icon-yes';
        }
      });
    },
    popupHide() {
      this.classifyShow = !this.classifyShow;
      this.classifyTab.forEach((item, index) => {
        const val = item;
        val.class = 'shop-classify-item';
        val.icon = '#icon-down-arrow';
        this.classifyItem[index].show = false;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
  .shop{
    position: relative;
    overflow: hidden;
    padding: 404px 16px 0;
    .search-input{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 13px 16px 16px;
      box-sizing: border-box;
      z-index: 999;
      background-color: #fff;
      input{
        width: 100%;
        border: 1px solid #EBEBEB;
        border-radius: 6px;
        text-align: center;
        font-size: 28px;
        padding: 12px 0;
      }
    }
    &-banner{
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
      img{
        border-radius: 4px;
      }
    }
    &-classify{
      position: relative;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 -16px 20px;
      padding: 32px 12px 12px;
      background-color: #fff;
      &-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 12px;
        padding: 12px 0;
        text-align: center;
        color: #455563;
        background-color: #F9F9F9;
        border: 1px solid transparent;
        border-radius: 6px;
        svg{
          width: 36px;
          height: 30px;
        }
      }
      > .active{
        position: relative;
        color: #F6A11C;
        background-color: #fff;
        border: 1px solid #EBEBEB;
        &:after{
          position: absolute;
          top: 100%;
          left: -1px;
          width: 100%;
          height: 16px;
          background: #fff;
          font-size: 0;
          border: 1px solid #ebebeb;
          border-width: 0 1px;
          z-index: 999;
        }
      }
    }
    .classify-popup-warp{
      position: absolute;
      top: 513px;
      left: 0;
      z-index: 999;
      width: 100%;
      background-color: #fff;
      border: 1px solid #EBEBEB;
      border-width: 1px 0;
      .classify-popup-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
        font-size: 28px;
        svg{
          width: 28px;
          height: 20px;
        }
      }
      .active{
        color: #f6a11c;
      }
    }
    .classify-popup-mark{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(0,0,0,.5);
    }
    &-goods{
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

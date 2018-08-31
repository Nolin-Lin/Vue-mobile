<template>
  <div>
    <ul class="shop-classify">
      <li
        :class="item.class"
        v-for="(item, index) in classifyTab"
        :key="index"
        @click="tabfun(index)"
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
  </div>
</template>

<script>
export default {
  props: {
    classifyTab: {
      type: Array,
      default() {
        return [
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
        ];
      }
    },
    classifyItem: {
      type: Array,
      default() {
        return [
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
        ];
      }
    }
  },
  data() {
    return {
      classifyShow: false,
      whichTab: 0
    };
  },
  methods: {
    tabfun(i) {
      this.classifyTab.forEach((item, index) => {
        const val = item;
        if (index === i) {
          if (i === this.whichTab && this.classifyShow === true) {
            val.class = 'shop-classify-item';
            val.icon = '#icon-down-arrow';
            this.classifyItem[i].show = false;
            this.classifyShow = false;
          } else {
            val.class = 'shop-classify-item active';
            val.icon = '#icon-down-arrow-active';
            this.classifyItem[i].show = true;
            this.classifyShow = true;
          }
          this.whichTab = i;
        } else {
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
.shop-classify {
  position: relative;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin: 0 -16px 20px;
  padding: 32px 12px 12px;
  background-color: #fff;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 12px;
    padding: 12px 0;
    text-align: center;
    color: #455563;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    border-radius: 6px;
    svg {
      width: 36px;
      height: 30px;
    }
  }
  > .active {
    position: relative;
    color: #f6a11c;
    background-color: #fff;
    border: 1px solid #ebebeb;
    &:after {
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
.classify-popup-warp {
  position: absolute;
  left: 0;
  z-index: 999;
  width: 100%;
  // margin-top: -20px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-width: 1px 0;
  .classify-popup-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    font-size: 28px;
    svg {
      width: 28px;
      height: 20px;
    }
  }
  .active {
    color: #f6a11c;
  }
}
.classify-popup-mark {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  // background: linear-gradient(transparent 33vw,rgba(0, 0, 0, 0.5) 0);
}
</style>

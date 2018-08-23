<template>
  <div class="my">
    <div class="my-user my-card">
      <div class="my-card-left">
        <div class="my-user-avatar">
          <img src="@/assets/avatar.png">
        </div>
        <div class="my-user-name">他的阿多</div>
      </div>
      <div class="my-card-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-arrow"></use>
        </svg>
      </div>
    </div>
    <div class="my-card">
      <div class="my-card-left">
        <div class="my-card-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-collection"></use>
          </svg>
        </div>
        <span>我的收藏</span>
      </div>
      <div class="my-card-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-arrow"></use>
        </svg>
      </div>
    </div>
    <div class="my-card">
      <div class="my-card-left">
        <div class="my-card-svg">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-switch"></use>
          </svg>
        </div>
        <span>切换角色</span>
      </div>
      <div class="my-card-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-arrow"></use>
        </svg>
      </div>
    </div>
    <footBar></footBar>
  </div>
</template>

<script>
import footBar from '@/components/footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    footBar
  }
};
</script>

<style lang='scss' scoped>
.my{
  height: 100%;
  background: #EFF3F6;
  &-card, .my-card-left{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-card{
    padding: 26px 32px;
    margin-bottom: 27px;
    background-color: #fff;
    &-left{
      font-size: 32px;
      color: #455563;
    }
    &-svg{
      width: 48px;
      height: 48px;
      margin-right: 20px;
      > svg{
        width: 100%;
        height: 100%;
      }
    }
    &-right{
      width: 26px;
      height: 48px;
      svg{
        width: 100%;
        height: 100%;
      }
    }
  }
  &-user{
      padding: 44px 32px;
      &-avatar{
        width: 88px;
        height: 88px;
        border-radius: 44px;
        margin-right: 28px;
      }
      &-name{
        font-size: 40px;
        color: #455563;
      }
  }
}
</style>

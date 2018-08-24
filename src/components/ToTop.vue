<template>
  <transition :name="transitionName">
    <div class="totop" @click="backToTop" v-show="visible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huidaodingbu"></use>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visibilityHeight: {
      type: Number,
      default: 10
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default() {
        return {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px',
          background: '#e7eaf1'
        };
      }
    },
    transitionName: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
      visible: false,
      interval: null,
      isMoving: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight;
    },
    backToTop() {
      if (this.isMoving) return;
      const start = window.pageYOffset;
      let i = 0;
      this.isMoving = true;
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500));
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition);
          clearInterval(this.interval);
          this.isMoving = false;
        } else {
          window.scrollTo(0, next);
        }
        i += 1;
      }, 16.7);
    },
    easeInOutQuad(time, begin, end, durning) {
      let t = time;
      const b = begin;
      const c = end;
      const d = durning;
      let val = 0;
      const ifval = (t /= d / 2) < 1;

      if (ifval) {
        return (((c / 2) * t) * t) + b;
      }
      val = ((-c / 2) * ((t -= 1 * (t - 2)) - 1)) + b;
      return val;
    }
  }
};
</script>

<style lang='scss' scoped>
.totop {
  position: fixed;
  bottom: 117px;
  right: 16px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: 1px solid #ebebeb;
  svg {
    width: 100%;
    height: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>

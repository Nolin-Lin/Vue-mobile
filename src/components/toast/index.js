import vue from 'vue';
import toastComponent from './index.vue';

let instance;
let time;
let toastVisible = false;
const opt = toastComponent.data();

const ToastConstructor = vue.extend(toastComponent);

function showToast(message, duration) {
  if (toastVisible) {
    clearTimeout(time);
    toastVisible = false;
    instance.visible = false;
    document.body.removeChild(instance.$el);
  }
  if (message) {
    opt.message = message;
  }
  if (duration) {
    opt.duration = duration;
  }
  instance = new ToastConstructor({
    el: document.createElement('div'),
    data: opt
  });
  document.body.appendChild(instance.$el);
  toastVisible = true;
  instance.visible = true;
  time = setTimeout(() => {
    toastVisible = false;
    instance.visible = false;
    document.body.removeChild(instance.$el);
  }, opt.duration);
}

function registryToast() {
  vue.prototype.$toast = showToast;
}

export default registryToast;

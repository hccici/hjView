import Vue from 'vue'
import app from './app'
import router from './router';
import './styles/index.scss';
import './public-path';
Vue.config.productionTip = false
// 全局注册组件
import HJView from '../src/index';
Vue.use(HJView)
// 注册文档组件
import demoBlock from './components/demo-block';
Vue.component('demo-block', demoBlock);

// vue实例用于释放资源
let vueInstance = null;

function render(props = {}) {
  const { container } = props;
  vueInstance = new Vue({
    router,
    mounted() {
      window.hjView = this
    },
    render: h => h(app),
  }).$mount(container ? container.querySelector('#app') : '#app') // 在乾坤就在乾坤的app容器里加载
}
// 不在乾坤就直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 以下方法都是提供给乾坤使用的
// 首次加载资源会执行，切换应用后又切回来不会了
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
// 接上面的，每次切到这个应用会触发
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  props.onGlobalStateChange && props.onGlobalStateChange(
    (value, prev) => console.log(`11[onGlobalStateChange - ${props.name}]:`, value, prev),
    true,
  );
  render(props);
}
// 同上
export async function unmount() {
  // 释放资源
  vueInstance.$destroy();
  vueInstance.$el.innerHTML = '';
  vueInstance = null;
  router = null;
}
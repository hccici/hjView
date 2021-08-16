import Vue from 'vue'
import app from './app'
import router from './router';
import './styles/index.scss';
Vue.config.productionTip = false
// 全局注册组件
import HJView from '../src/index';
Vue.use(HJView)
// 注册文档组件
import demoBlock from './components/demo-block';
Vue.component('demo-block', demoBlock);

new Vue({
  router,
  mounted() {
    window.hjView = this
  },
  render: h => h(app),
}).$mount('#app')

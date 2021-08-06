import Vue from 'vue'
import app from './app.vue'
import router from './router';
// 全局注册组件
import HJView from '../src/index';
Vue.use(HJView)
Vue.config.productionTip = false

new Vue({
  router,
  mounted() {
    window.hjView = this
  },
  render: h => h(app),
}).$mount('#app')

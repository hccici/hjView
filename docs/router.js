import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js';
Vue.use(VueRouter)

const routes = []
const router = new VueRouter({
  mode: 'history',
  routes
})
// 加载hilight.js解析代码块
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    blocks && Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
})
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js';
Vue.use(VueRouter)
export const _routes = {
  basic: [
    {
      name: 'Icon 图标',
      key: 'icon'
    },
    {
      name: 'Button 按钮',
      key: 'button'
    }
  ]
}
const routes = []
Object.keys(_routes).forEach(key => {
  _routes[key].forEach(item => {
    const { key } = item
    if (key) {
      routes.push({
        path: '/' + key,
        name: key,
        component: () => import(`./documents/${key}.md`)
      })
    }
  })
})
routes.unshift({
  path: '/',
  name: 'index',
  component: () => import(`./documents/index.md`)
})
const router = new VueRouter({
  base: process.env.NODE_ENV === 'production'
    ? '/hjView'
    : '/',
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

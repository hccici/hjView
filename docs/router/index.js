import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'
import config from './config'
Vue.use(VueRouter)
export const _routes = config
const routes = []
Object.keys(_routes).forEach(key => {
  _routes[key].forEach(item => {
    const { key } = item
    if (key) {
      routes.push({
        path: '/' + key,
        name: key,
        component: () => import(`../documents/${key}.md`)
      })
    }
  })
})
routes.unshift({
  path: '/',
  name: 'index',
  component: () => import(`../documents/index.md`)
})
let baseUrl = '/'; // 本地路由
if (process.env.NODE_ENV === 'production') {
  baseUrl = '/hjView/' // 远程路由
}
if (window.__POWERED_BY_QIANKUN__) {
  baseUrl = '/hjView/'// 本地乾坤路由
  if (process.env.NODE_ENV === 'production') {
    baseUrl = '/qiankun/hjView/'// 远程乾坤路由
  }
}
const router = new VueRouter({
  base: baseUrl,
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

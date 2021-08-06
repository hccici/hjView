import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = []
const files = require.context('./views', false, /\.vue$/)
const reg = /^.\/(.*).vue$/
files.keys().forEach(key => {
  const name = reg.exec(key)[1]
  routes.push({
    path: '/' + name,
    name: name,
    component: files(key).default
  })
})

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

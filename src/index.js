// 导入组件
import HjButton from './components/Button'
import HjIcon from './components/Icon'
import HjAlert from './components/Alert'
import HjTable from './components/Table'
// 组件列表
const components = [
  HjButton,
  HjIcon,
  HjAlert,
  HjTable
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    component.install(Vue)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 全局安装
export default install;
// 按需引入暴露
export {
  HjButton,
  HjIcon,
  HjAlert,
  HjTable
}
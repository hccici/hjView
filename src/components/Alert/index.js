// 导入组件，组件必须声明 name
import HjAlert from './HjAlert'

// 为组件提供 install 安装方法，供按需引入
HjAlert.install = function (Vue) {
  Vue.component(HjAlert.name, HjAlert)
}

// 默认导出组件
export default HjAlert
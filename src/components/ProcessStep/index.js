// 导入组件，组件必须声明 name
import HjProcessStep from './HjProcessStep'

// 为组件提供 install 安装方法，供按需引入
HjProcessStep.install = function (Vue) {
  Vue.component(HjProcessStep.name, HjProcessStep)
}

// 默认导出组件
export default HjProcessStep
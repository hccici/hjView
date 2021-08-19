// 导入组件，组件必须声明 name
import HjButton from './HjButton'
import HjButtonGroup from './HjButtonGroup'

// 为组件提供 install 安装方法，供按需引入
HjButton.install = function (Vue) {
  Vue.component(HjButton.name, HjButton)
  Vue.component(HjButtonGroup.name,HjButtonGroup)
}

HjButton.group = HjButtonGroup
// 默认导出组件
export default HjButton
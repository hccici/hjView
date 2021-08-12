// 导入组件，组件必须声明 name
import HjButton from './HjButton'


// 为组件提供 install 安装方法，供按需引入
HjButton.install = function (Vue) {
  Vue.component(HjButton.name, HjButton)
}

// 默认导出组件
export default HjButton
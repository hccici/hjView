// 导入组件，组件必须声明 name
import HjCodeCompare from './HjCodeCompare'

// 为组件提供 install 安装方法，供按需引入
HjCodeCompare.install = function (Vue) {
  Vue.component(HjCodeCompare.name, HjCodeCompare)
}

// 默认导出组件
export default HjCodeCompare
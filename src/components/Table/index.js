// 导入组件，组件必须声明 name
import HjTable from './HjTable'

// 为组件提供 install 安装方法，供按需引入
HjTable.install = function (Vue) {
  Vue.component(HjTable.name, HjTable)
}

// 默认导出组件
export default HjTable
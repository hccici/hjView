import HjIcon from './HjIcon';
// 为组件提供 install 安装方法，供按需引入
HjIcon.setSvgSymbol = function () {
  import('./iconfont');
}
HjIcon.install = function (Vue) {
  Vue.component(HjIcon.name, HjIcon)
  HjIcon.setSvgSymbol()
}

export default HjIcon;
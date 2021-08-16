import HjIcon from './HjIcon';
// 为组件提供 install 安装方法，供按需引入
HjIcon.setSvgSymbol = function (Vue) {
  import('./iconfont');
  Vue.prototype.$icon = [
    "mima",
    "youjian2",
    "youjian1",
    "zhuye",
    "ziyuangongxiang",
    "shoucang",
    "yonghufankui",
    "wenjian",
    "gongzuotaiguanli",
    "youjian3",
    "zhuye2",
    "shanchu",
    "rili",
    "tongzhi",
    "sousuo",
    "bianji",
    "fujian",
    "liucheng",
    "xiaoxi",
    "biaoqian"
  ]
}
HjIcon.install = function (Vue) {
  Vue.component(HjIcon.name, HjIcon);
  HjIcon.setSvgSymbol(Vue);
}

export default HjIcon;
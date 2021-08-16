<template>
  <div>
    <template v-for="icon of arr">
      <hj-icon :key="icon" :icon="icon" size="32"></hj-icon>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
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
  }
}
</script>

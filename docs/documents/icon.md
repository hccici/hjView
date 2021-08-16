
## Icon 图标

使用了svg作为图标。内置了一套比较简洁的图标库，你也可以自己去[iconfont](https://www.iconfont.cn/)下载，并扩展。

### 使用方法

直接通过设置类名为来使用即可。例如：

:::demo
```html
<template>
  <hj-icon icon="mima" size="32" color="red"></hj-icon>
  <hj-icon icon="xiaoxi" size="32"></hj-icon>
  <hj-icon icon="biaoqian" size="32"></hj-icon>
</template>
```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" class="flex-column-center" :key="name">
      <hj-icon :icon="name" size="32"></hj-icon>
      <span class="icon-name">{{name}}</span>
  </li>
</ul>

### 参数

| 参数  | 说明       | 类型   | 可选值             | 默认值         |
| ----- | ---------- | ------ | ------------------ | -------------- |
| size  | 图标的大小 | Number | 符合规范的任意数字 | 继承字体的大小 |
| color | 图标的颜色 | String | 符合规范的颜色值   | 继承的颜色     |


## 流程步骤

用来在有限的空间内显示出多个步骤块。

### 基础用法

:::demo 把要显示的步骤数组给塞到`data`里，通过`blockWidth`、`arrowWidth`，可自定义块的宽度和箭头宽度。当页面宽度发生变化时，可以调用`reset`方法重新计算布局。

```html
<template>
    <div ref="box" style="width: 600px;border: 1px solid black;magin: 10px;padding: 10px;">
      <button @click="handleClick">
        改变宽度
      </button>
      <hj-process-step ref="step" :data="data3" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      data3: ['hhj1', 'hhj2', 'hhj3', 'hhj4', 'hhj5', 'hhj6', 'hhj7', 'hhj8', 'hhj9', 'hhj10', 'hhj11', 'hhj12', 'hhj13', 'hhj14', 'hhj15', 'hhj16', 'hhj17', 'hhj18', 'hhj19', 'hhj20'],
    }
  },
  methods: {
    handleClick() {
      this.$refs.box.style.width = '1000px'
      this.$refs.step.reset()
    }
  }
}
</script>
```
:::

### 参数

| 参数       | 说明             | 类型   | 可选值 | 默认值 |
| ---------- | ---------------- | ------ | ------ | ------ |
| blockWidth | 元素块宽度       | Number |        | 100    |
| arrowWidth | 箭头（间隔）宽度 | Number |        | 40     |
| data       | 要显示的数据     | Array  |        | []     |

### 方法

| 方法名 | 说明     | 参数 | 返回值 |
| ------ | -------- | ---- | ------ |
| reset | 重新布局 | 无   | 无     |
## 代码比较
主要用于比较代码之前的差异显示。

### 基础用法

:::demo 给`origin`、`compare`直接赋值。

```html
<template>
  <hj-code-compare
    :origin="origin"
    :compare="compare"
  />
</template>

<script>
export default {
  data() {
    return {
      origin: '{"name":"张馨元","age":25.2,"birthday":"1990-01-01","children":{"name":"彭璇","age":25.2,"birthday":"1990-01-01"}}',
      compare: '{"name":"孙炳义","age":25.2,"birthday":"1990-01-01","children":{"name":"张馨元","age":25.2,"birthday":"1990-01-01"}}'
    }
  }
}
</script>
```
:::

### 异步提供数据、指定改变提示类

:::demo 假设数据是异步返回来的，更新数据时，需要调用`update`方法。可以通过`compare-class`指定类名，改变差异处的css。

```html
<template>
  <hj-code-compare
    ref="code"
    :origin="origin"
    :compare="compare"
    compare-class="demo-code-compare"
  />
</template>

<script>
export default {
  data() {
    return {
      origin: '',
      compare: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.origin = '{"name":"张馨元","age":25.2,"birthday":"1990-01-01","children":{"name":"彭璇","age":25.2,"birthday":"1990-01-01"}}'
      this.compare = '{"name":"孙炳义","age":25.2,"birthday":"1990-01-01","children":{"name":"张馨元","age":25.2,"birthday":"1990-01-01"}}'
      this.$refs.code.update()
    }, 2000);
  }
}
</script>
```
:::

### 参数

| 参数     | 说明                 | 类型   | 可选值                       | 默认值         |
| -------- | -------------------- | ------ | ---------------------------- | -------------- |
| origin   | 原始字符串           | String | 按照一定的编码格式，例如JSON | ''             |
| compare  | 要比较的字符串       | String | 按照一定的编码格式，例如JSON | ''             |
| errorTip | 解析出错时显示的文字 | String |                              | 解析代码出错！ |
| codeType | 指定解析的格式       | String | json                         | json           |

### 方法

| 方法名 | 说明     | 参数 | 返回值 |
| ------ | -------- | ---- | ------ |
| update | 更新内容 | 无   | 无     |
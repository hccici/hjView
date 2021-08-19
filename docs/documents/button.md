## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`hj-type`、`size`、`corner`属性来定义 Button 的样式。还可以添加原生属性

```html
<hj-button>default</hj-button>
<hj-button hj-type="success" size="middle" corner="circle">success</hj-button>
<hj-button hj-type="warning" size="large" corner="semicircle">warning</hj-button>
<hj-button hj-type="danger" type="submit ">danger</hj-button>
```
:::

### 禁用状态和loading状态

按钮不可用状态，加载状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，可以使用`loading`属性使按钮变为加载状态。两个操作都将使按钮变得不可点击。

```html
<hj-button hj-type="danger" type="submit" :disabled="true">danger</hj-button>
<hj-button hj-type="warning" size="large" corner="semicircle" :loading="true">warning</hj-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考icon 组件。

```html
<hj-button hj-type="success" size="middle" corner="circle" icon="mima">success</hj-button>
<hj-button hj-type="warning" size="large" corner="circle" icon="sousuo"></hj-button>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<hj-button-group>`标签来嵌套你的按钮。

```html
<hj-button-group>
  <hj-button icon="tongzhi"></hj-button>
  <hj-button icon="sousuo"></hj-button>
  <hj-button icon="bianji"></hj-button>
</hj-button-group>
```
:::

### 参数


| 参数     | 说明           | 类型    | 可选值                                  | 默认值  |
| -------- | -------------- | ------- | --------------------------------------- | ------- |
| hj-type  | 按钮类型       | string  | default \| success \| warning \| danger | default |
| size     | 按钮大小       | string  | small \| middle \| large                | small   |
| corner   | 圆角           | string  | right \| semicircle \| circle           | right   |
| loading  | 按钮加载状态   | boolean | true \| false                           | false   |
| disabled | 按钮不可用     | boolean | true \| false                           | false   |
| icon     | 为按钮增加图标 | string  | 参考icon列表                            | -       |
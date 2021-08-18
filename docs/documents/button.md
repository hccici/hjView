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
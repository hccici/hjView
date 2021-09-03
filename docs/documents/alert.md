## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。可以通过`description`属性指定显示内容，也可以通过插巢。
```html
<template>
<hj-alert>默认info</hj-alert>
<hj-alert description="success" type="success"></hj-alert>
<hj-alert description="warning" type="warning"></hj-alert>
<hj-alert description="danger" type="danger"></hj-alert>
</template>
```
:::

### 主题

Alert 组件提供了两个不同的主题：`light`和`dark`。

:::demo 通过设置`effect`属性来改变主题，默认为`light`。
```html
<template>
<hj-alert effect="dark">默认info</hj-alert>
<hj-alert type="success" effect="dark">success</hj-alert>
<hj-alert type="warning" effect="dark">warning</hj-alert>
<hj-alert type="danger" effect="dark">danger</hj-alert>
</template>
```
:::
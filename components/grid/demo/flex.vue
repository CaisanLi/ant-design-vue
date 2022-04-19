<docs>
---
order: 4
title:
  zh-CN: 排版
  en-US: Typesetting
---

## zh-CN

布局基础。

子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

## en-US

Child elements depending on the value of the `start`,`center`, `end`,`space-between`, `space-around`, which are defined in its parent node typesetting mode.

</docs>

<template>
  <div id="components-grid-demo-flex">
    <p>sub-element align left</p>
    <z-row justify="start">
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
    </z-row>

    <p>sub-element align center</p>
    <z-row justify="center">
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
    </z-row>

    <p>sub-element align right</p>
    <z-row justify="end">
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
    </z-row>

    <p>sub-element monospaced arrangement</p>
    <z-row justify="space-between">
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
    </z-row>

    <p>sub-element align full</p>
    <z-row justify="space-around">
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
      <z-col :span="4">col-4</z-col>
    </z-row>
  </div>
</template>

<style lang="less" scoped>
#components-grid-demo-flex :deep(.ant-row) {
  background: rgba(128, 128, 128, 0.08);
}
</style>

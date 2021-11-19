<docs>
---
order: 4
title:
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符

## en-US

The separator can be customized by setting the separator preperty: separator=">" or use
  slot="separator"

</docs>

<template>
  <z-breadcrumb separator=">">
    <z-breadcrumb-item>Home</z-breadcrumb-item>
    <z-breadcrumb-item href="">Application Center</z-breadcrumb-item>
    <z-breadcrumb-item href="">Application List</z-breadcrumb-item>
    <z-breadcrumb-item>An Application</z-breadcrumb-item>
  </z-breadcrumb>
  <z-breadcrumb>
    <template #separator><span style="color: red">></span></template>
    <z-breadcrumb-item>Home</z-breadcrumb-item>
    <z-breadcrumb-item href="">Application Center</z-breadcrumb-item>
    <z-breadcrumb-item href="">Application List</z-breadcrumb-item>
    <z-breadcrumb-item>An Application</z-breadcrumb-item>
  </z-breadcrumb>
</template>

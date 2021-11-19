<docs>
---
order: 6
title:
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

使用 `Breadcrumb.Separator` 可以自定义分隔符。

## en-US

The separator can be customized by setting the separator property: `Breadcrumb.Separator`.

</docs>

<template>
  <z-breadcrumb separator="">
    <z-breadcrumb-item>Location</z-breadcrumb-item>
    <z-breadcrumb-separator>:</z-breadcrumb-separator>
    <z-breadcrumb-item href="">Application Center</z-breadcrumb-item>
    <z-breadcrumb-separator />
    <z-breadcrumb-item href="">Application List</z-breadcrumb-item>
    <z-breadcrumb-separator />
    <z-breadcrumb-item>An Application</z-breadcrumb-item>
  </z-breadcrumb>
</template>

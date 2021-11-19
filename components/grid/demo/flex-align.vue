<docs>
---
order: 5
title:
  zh-CN: 对齐
  en-US: Alignment
---

## zh-CN

子元素垂直对齐。

## en-US

Child elements vertically aligned.

</docs>

<template>
  <p>Align Top</p>
  <z-row type="flex" justify="center" align="top">
    <z-col :span="4">
      <p class="height-100">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-50">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-120">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-80">col-4</p>
    </z-col>
  </z-row>

  <p>Align Center</p>
  <z-row type="flex" justify="space-around" align="middle">
    <z-col :span="4">
      <p class="height-100">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-50">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-120">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-80">col-4</p>
    </z-col>
  </z-row>

  <p>Align Bottom</p>
  <z-row type="flex" justify="space-between" align="bottom">
    <z-col :span="4">
      <p class="height-100">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-50">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-120">col-4</p>
    </z-col>
    <z-col :span="4">
      <p class="height-80">col-4</p>
    </z-col>
  </z-row>
</template>

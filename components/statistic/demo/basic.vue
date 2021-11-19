<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

简单展示

## en-US

Simplest Usage.

</docs>

<template>
  <z-row>
    <z-col :span="12">
      <z-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
    </z-col>
    <z-col :span="12">
      <z-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
    </z-col>
  </z-row>
</template>

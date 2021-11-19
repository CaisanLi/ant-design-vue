<docs>
---
order: 2
title:
  zh-CN: 使用title插槽
  en-US: Using the title slot
---

## zh-CN

提供title插槽，自定义右边title内容

## en-US

The title slot is provided to customize the title content on the right.
</docs>

<template>
  <div class="content">
    <z-logo :number="2">
      <template #title>众信佳</template>
    </z-logo>
  </div>
</template>

<style>
.content {
  display: flex;
  flex-flow: row wrap;
}
.content .ant-logo:not(:first-child) {
  margin-left: 10px;
}
</style>

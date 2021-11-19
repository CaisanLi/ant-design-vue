<docs>
---
order: 4
title:
  zh-CN: 栅格列表
  en-US: Grid
---

## zh-CN

可以通过设置 `List` 的 `grid` 属性来实现栅格列表，`column` 可设置期望显示的列数。

## en-US

Creating a grid list by setting the `grid` property of List

</docs>

<template>
  <z-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <template #renderItem="{ item }">
      <z-list-item>
        <z-card :title="item.title">Card content</z-card>
      </z-list-item>
    </template>
  </z-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>

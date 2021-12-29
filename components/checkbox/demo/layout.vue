<docs>
---
order: 5
title:
  zh-CN: 布局
  en-US: Use with grid
---

## zh-CN

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局

## en-US

We can use Checkbox and Grid Checkbox.group, to implement complex layout

</docs>

<template>
  <z-checkbox-group v-model:value="value" style="width: 100%">
    <z-row>
      <z-col :span="8">
        <z-checkbox value="A">A</z-checkbox>
      </z-col>
      <z-col :span="8">
        <z-checkbox value="B">B</z-checkbox>
      </z-col>
      <z-col :span="8">
        <z-checkbox value="C">C</z-checkbox>
      </z-col>
      <z-col :span="8">
        <z-checkbox value="D">D</z-checkbox>
      </z-col>
      <z-col :span="8">
        <z-checkbox value="E">E</z-checkbox>
      </z-col>
    </z-row>
  </z-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref([]);
    return {
      value,
    };
  },
});
</script>

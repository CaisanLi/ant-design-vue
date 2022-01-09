<docs>
---
order: 1.1
title:
  zh-CN: 切换不同的选择器
  en-US: Switchable picker
---

## zh-CN

提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

## en-US

Switch in different types of pickers by Select.
</docs>
<template>
  <z-space direction="vertical" :size="12">
    <z-select v-model:value="type">
      <z-select-option value="time">Time</z-select-option>
      <z-select-option value="date">Date</z-select-option>
      <z-select-option value="week">Week</z-select-option>
      <z-select-option value="month">Month</z-select-option>
      <z-select-option value="quarter">Quarter</z-select-option>
      <z-select-option value="year">Year</z-select-option>
    </z-select>
    <template v-if="type === 'time'">
      <z-time-picker />
    </template>
    <template v-else>
      <z-date-picker :picker="type" />
    </template>
  </z-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      type: ref<any>('time'),
    };
  },
});
</script>

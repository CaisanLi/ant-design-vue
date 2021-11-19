<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

基本用法

## en-US

Basic usage.

</docs>
<template>
  <z-mentions v-model:value="value" autofocus @select="onSelect">
    <z-mentions-option value="afc163">afc163</z-mentions-option>
    <z-mentions-option value="zombieJ">zombieJ</z-mentions-option>
    <z-mentions-option value="yesmeck">yesmeck</z-mentions-option>
  </z-mentions>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('@afc163');
    watch(value, () => {
      console.log('value', value);
    });
    const onSelect = (option: { value: string }) => {
      console.log('select', option);
    };

    return {
      value,
      onSelect,
    };
  },
});
</script>

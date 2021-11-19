<docs>
---
order: 4
title:
  zh-CN: 向上展开
  en-US: Placemen
---

## zh-CN

向上展开建议。

## en-US

Change the suggestions placement.

</docs>
<template>
  <z-mentions v-model:value="value" placement="top">
    <z-mentions-option value="afc163">afc163</z-mentions-option>
    <z-mentions-option value="zombieJ">zombieJ</z-mentions-option>
    <z-mentions-option value="yesmeck">yesmeck</z-mentions-option>
  </z-mentions>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
</script>

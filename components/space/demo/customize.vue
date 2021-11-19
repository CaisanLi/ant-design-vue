<docs>
---
order: 3
title:
  zh-CN: 自定义尺寸
  en-US: Customize Size
---

## zh-CN

自定义间距大小。

## en-US

Custom spacing size.
</docs>

<template>
  <div>
    <z-slider v-model:value="size" />
    <br />
    <br />
    <z-space :size="size">
      <z-button type="primary">Primary</z-button>
      <z-button>Default</z-button>
      <z-button type="dashed">Dashed</z-button>
      <z-button type="link">Link</z-button>
    </z-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref(8),
    };
  },
});
</script>

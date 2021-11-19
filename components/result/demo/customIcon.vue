<docs>
---
order: 7
title:
  zh-CN: 自定义 icon
  en-US: Custom icon
---

## zh-CN

自定义 icon。

## en-US

Custom icon.

</docs>

<template>
  <z-result title="Great, we have done all the operations!">
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <z-button type="primary">Next</z-button>
    </template>
  </z-result>
</template>
<script lang="ts">
import { SmileTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileTwoTone,
  },
});
</script>

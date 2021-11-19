<docs>
---
order: 2
title:
  zh-CN: 间距大小
  en-US: Space Size
---

## zh-CN

间距预设大、中、小三种大小。
通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。


## en-US

`large`, `middle` and `small` preset sizes.
Set the size to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small`.

</docs>

<template>
  <div>
    <z-radio-group v-model:value="size">
      <z-radio value="small">Small</z-radio>
      <z-radio value="middle">Middle</z-radio>
      <z-radio value="large">Large</z-radio>
    </z-radio-group>
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
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref('small'),
    };
  },
});
</script>

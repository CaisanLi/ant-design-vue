<docs>
---
order: 1
title:
  zh-CN: 可选择删除
  en-US: CheckableClose
---

## zh-CN

可通过 `CheckableCloseTag` 实现类似 Button 的效果，点击切换选中效果。
> 该组件为完全受控组件，不支持非受控用法。

## en-US

`CheckableCloseTag` works like Button, click it to toggle checked state.
> it is an absolute controlled component and has no uncontrolled mode.

</docs>

<template>
  <div>
    <z-checkable-close-tag v-model:checked="checked1" @change="handleChange" @close="handleClose">Tag1</z-checkable-close-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    // or use watch
    const handleChange = (checked: boolean) => {
      console.log(checked);
    };

    const handleClose = (e: MouseEvent) => {
      console.log(e);
    };

    return {
      handleChange,
      checked1: ref(false),
      handleClose,
    };
  },
});
</script>

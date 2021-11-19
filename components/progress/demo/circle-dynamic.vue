<docs>
---
order: 5
title:
  zh-CN: 进度圈动态展示
  en-US: Dynamic circular progress bar
---

## zh-CN

会动的进度条才是好进度条。

## en-US

A dynamic progress bar is better.

</docs>

<template>
  <div>
    <z-progress type="circle" :percent="defaultPercent" />
    <z-button-group>
      <z-button @click="decline">
        <template #icon><minus-outlined /></template>
      </z-button>
      <z-button @click="increase">
        <template #icon><plus-outlined /></template>
      </z-button>
    </z-button-group>
  </div>
</template>
<script lang="ts">
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  setup() {
    const defaultPercent = ref<number>(0);

    const increase = () => {
      const percent = defaultPercent.value + 10;
      defaultPercent.value = percent > 100 ? 100 : percent;
    };

    const decline = () => {
      const percent = defaultPercent.value - 10;
      defaultPercent.value = percent < 0 ? 0 : percent;
    };
    return {
      defaultPercent,
      increase,
      decline,
    };
  },
});
</script>

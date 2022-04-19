<docs>
---
order: 4
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `Button`.
</docs>

<template>
  <z-space style="width: 100%">
    <z-button type="primary" loading>Loading</z-button>
    <z-button type="primary" size="small" loading>Loading</z-button>
  </z-space>
  <z-space style="width: 100%">
    <z-button type="primary" :loading="loading" @mouseenter="loading = true">
      mouseenter me!
    </z-button>
    <z-button type="primary" :loading="iconLoading" @click="enterIconLoading">
      <template #icon><PoweroffOutlined /></template>
      延迟1s
    </z-button>
  </z-space>
  <z-space style="width: 100%">
    <z-button type="primary" loading />
    <z-button type="primary" shape="circle" loading />
    <z-button danger shape="round" loading />
  </z-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';

interface DelayLoading {
  delay: number;
}
export default defineComponent({
  components: { PoweroffOutlined },
  setup() {
    const iconLoading = ref<boolean | DelayLoading>(false);
    const enterIconLoading = () => {
      iconLoading.value = { delay: 1000 };

      setTimeout(() => {
        iconLoading.value = false;
      }, 6000);
    };
    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
    };
  },
});
</script>

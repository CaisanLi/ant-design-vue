<docs>
---
order: 3
title:
  zh-CN: 其他提示类型
  en-US: Other types of message
---

## zh-CN

包括成功、失败、警告。

## en-US

Messages of success, error and warning types.

</docs>

<template>
  <z-space>
    <z-button @click="success">Success</z-button>
    <z-button @click="error">Error</z-button>
    <z-button @click="warning">Warning</z-button>
  </z-space>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const success = () => {
      message.success('This is a success message');
    };
    const error = () => {
      message.error('This is an error message');
    };
    const warning = () => {
      message.warning('This is a warning message');
    };
    return {
      success,
      error,
      warning,
    };
  },
});
</script>

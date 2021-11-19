<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

相邻组件水平间距。


## en-US

Crowded components horizontal spacing.

</docs>

<template>
  <z-space>
    Space
    <z-button type="primary">Button</z-button>
    <z-upload>
      <z-button>
        <UploadOutlined />
        Click to Upload
      </z-button>
    </z-upload>
    <z-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <z-button>Confirm</z-button>
    </z-popconfirm>
  </z-space>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
</script>

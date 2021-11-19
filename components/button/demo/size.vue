<docs>
---
order: 2
title:
  zh-CN: 按钮尺寸
  en-US: Size
---

## zh-CN

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
</docs>

<template>
  <z-radio-group v-model:value="size">
    <z-radio-button value="large">Large</z-radio-button>
    <z-radio-button value="default">Default</z-radio-button>
    <z-radio-button value="small">Small</z-radio-button>
  </z-radio-group>
  <br />
  <br />
  <z-button type="primary" :size="size">Primary</z-button>
  <z-button :size="size">Normal</z-button>
  <z-button type="dashed" :size="size">Dashed</z-button>
  <z-button danger :size="size">Danger</z-button>
  <z-button type="link" :size="size">Link</z-button>
  <br />
  <z-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </z-button>
  <z-button type="primary" shape="circle" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </z-button>
  <z-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
      Download
    </template>
  </z-button>
  <z-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </z-button>
  <z-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </z-button>
  <br />
</template>
<script lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    DownloadOutlined,
  },
  setup() {
    return {
      size: ref('large'),
    };
  },
});
</script>

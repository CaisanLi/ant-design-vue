<docs>
---
order: 3
title:
  zh-CN: 可交互
  en-US: Interactive
---

## zh-CN

提供可编辑和可复制等额外的交互能力。

## en-US

Provide additional interactive capacity of editable and copyable.
</docs>
<template>
  <z-typography-paragraph v-model:content="editableStr" editable />
  <z-typography-paragraph v-model:content="customIconStr" editable>
    <template #editableIcon><HighlightOutlined /></template>
    <template #editableTooltip>click to edit text</template>
  </z-typography-paragraph>
  <z-typography-paragraph v-model:content="hideTooltipStr" :editable="{ tooltip: false }" />
  <z-typography-paragraph
    v-model:content="lengthLimitedStr"
    :editable="{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }"
  />

  <z-typography-paragraph copyable>This is a copyable text.</z-typography-paragraph>
  <z-typography-paragraph :copyable="{ text: 'Hello, Ant Design!' }">
    Replace copy text.
  </z-typography-paragraph>
  <z-typography-paragraph copyable content="Custom Copy icon and replace tooltips text.">
    <template #copyableIcon="{ copied }">
      <SmileOutlined v-if="!copied" key="copy-icon" />
      <SmileFilled v-else key="copied-icon" />
    </template>
    <template #copyableTooltip="{ copied }">
      <span v-if="!copied" key="copy-tooltip">click here</span>
      <span v-else key="copied-tooltip">you clicked!!</span>
    </template>
  </z-typography-paragraph>
  <z-typography-paragraph :copyable="{ tooltip: false }">
    Hide Copy tooltips.
  </z-typography-paragraph>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    HighlightOutlined,
    SmileOutlined,
    SmileFilled,
  },
  setup() {
    const editableStr = ref('This is an editable text.');
    watch(editableStr, () => {
      console.log('editableStr', editableStr.value);
    });
    return {
      editableStr,
      customIconStr: ref('Custom Edit icon and replace tooltip text.'),
      hideTooltipStr: ref('Hide Edit tooltip.'),
      lengthLimitedStr: ref('This is an editable text with limited length.'),
    };
  },
});
</script>

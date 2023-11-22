<docs>
---
order: 2
title:
  zh-CN: 前置/后置标签
  en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

</docs>

<template>
  <z-space direction="vertical">
    <z-input-number v-model:value="value1" addon-before="+" addon-after="$"></z-input-number>
    <z-input-number v-model:value="value2">
      <template #addonBefore>
        <z-select v-model:value="addonBeforeValue" style="width: 60px">
          <z-select-option value="add">+</z-select-option>
          <z-select-option value="minus">-</z-select-option>
        </z-select>
      </template>
      <template #addonAfter>
        <z-select v-model:value="addonAfterValue" style="width: 60px">
          <z-select-option value="USD">$</z-select-option>
          <z-select-option value="EUR">€</z-select-option>
          <z-select-option value="GBP">£</z-select-option>
          <z-select-option value="CNY">¥</z-select-option>
        </z-select>
      </template>
    </z-input-number>
    <z-input-number v-model:value="value3">
      <template #addonAfter><SettingOutlined /></template>
    </z-input-number>
    <z-input-number v-model:value="value4">
      <template #addonAfter>
        <z-cascader placeholder="cascader" style="width: 150px" />
      </template>
    </z-input-number>
  </z-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: { SettingOutlined },
  setup() {
    return {
      value1: ref(100),
      value2: ref(100),
      value3: ref(100),
      value4: ref(100),
      addonBeforeValue: ref('add'),
      addonAfterValue: ref('USD'),
    };
  },
});
</script>

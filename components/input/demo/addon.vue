<docs>
---
order: 8
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
    <z-input v-model:value="value1" addon-before="Http://" addon-after=".com" />
    <z-input v-model:value="value2">
      <template #addonBefore>
        <z-select v-model:value="value3" style="width: 90px">
          <z-select-option value="Http://">Http://</z-select-option>
          <z-select-option value="Https://">Https://</z-select-option>
        </z-select>
      </template>
      <template #addonAfter>
        <z-select v-model:value="value4" style="width: 80px">
          <z-select-option value=".com">.com</z-select-option>
          <z-select-option value=".jp">.jp</z-select-option>
          <z-select-option value=".cn">.cn</z-select-option>
          <z-select-option value=".org">.org</z-select-option>
        </z-select>
      </template>
    </z-input>
    <z-input v-model:value="value5">
      <template #addonAfter>
        <setting-outlined />
      </template>
    </z-input>

    <z-input v-model:value="value6">
      <template #addonBefore>
        <z-cascader placeholder="cascader" style="width: 150px" />
      </template>
    </z-input>
  </z-space>
</template>

<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
  },

  setup() {
    const value1 = ref<string>('mysite');
    const value2 = ref<string>('mysite');
    const value3 = ref<string>('Http://');
    const value4 = ref<string>('.com');
    const value5 = ref<string>('mysite');
    const value6 = ref<string>('mysite');
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
    };
  },
});
</script>

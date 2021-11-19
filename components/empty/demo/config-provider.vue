<docs>
---
order: 4
title:
  zh-CN: 全局化配置
  en-US: ConfigProvider
---

## zh-CN

自定义全局组件的 Empty 样式。

## en-US

Use ConfigProvider set global Empty style.

</docs>

<template>
  <z-switch
    v-model:checked="customize"
    un-checked-children="default"
    checked-children="customize"
  />
  <z-divider />
  <z-config-provider>
    <template v-if="customize" #renderEmpty>
      <div style="text-align: center">
        <smile-outlined style="font-size: 20px" />
        <p>Data Not Found</p>
      </div>
    </template>
    <div class="config-provider">
      <h3>Select</h3>
      <z-select :style="style" :options="[]" />

      <h3>TreeSelect</h3>
      <z-tree-select :style="style" :tree-data="[]" />

      <h3>Cascader</h3>
      <z-cascader :style="style" :options="[]" :show-search="true" />

      <h3>Transfer</h3>
      <z-transfer :data-source="[]" />

      <h3>Table</h3>
      <z-table style="margin-top: 8px" :columns="columns" :data-source="[]" />
      <h3>List</h3>
      <z-list :data-source="[]" />
    </div>
  </z-config-provider>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const customize = ref<boolean>(false);

    return {
      customize,
      style: { width: '200px' },
      columns: [{ title: 'Name' }, { title: 'Age' }],
    };
  },
});
</script>
<style scoped>
.code-box-demo .config-provider h3 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>

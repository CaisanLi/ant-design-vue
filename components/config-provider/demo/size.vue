<docs>
---
order: 2
title:
  zh-CN: 组件尺寸
  en-US: Component size
---

## zh-CN

修改默认组件尺寸。

## en-US

Config component default size.

</docs>

<template>
  <z-radio-group v-model:value="componentSize">
    <z-radio-button value="small">Small</z-radio-button>
    <z-radio-button value="middle">Middle</z-radio-button>
    <z-radio-button value="large">Large</z-radio-button>
  </z-radio-group>
  <z-divider />
  <z-config-provider :component-size="componentSize">
    <div class="example">
      <z-input />
    </div>
    <div class="example">
      <z-tabs>
        <z-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</z-tab-pane>
        <z-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</z-tab-pane>
        <z-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</z-tab-pane>
      </z-tabs>
    </div>
    <div class="example">
      <z-input-search allow-clear />
    </div>
    <div class="example">
      <z-textarea allow-clear />
    </div>
    <div class="example">
      <z-select style="width: 100px" placeholder="select value" :options="[{ value: 'demo' }]" />
    </div>
    <div class="example">
      <z-datePicker />
    </div>
    <div class="example">
      <z-range-picker />
    </div>
    <div class="example">
      <z-button>Button</z-button>
    </div>
    <div class="example">
      <z-card title="Card">
        <z-table :columns="columns" :data-source="dataSource" />
      </z-card>
    </div>
  </z-config-provider>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const componentSize = ref('small');
    const columns = [
      { title: 'Name', dataIndex: 'name' },
      { title: 'Age', dataIndex: 'age' },
    ];
    const dataSource = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
      },
    ];
    return {
      componentSize,
      columns,
      dataSource,
    };
  },
});
</script>
<style scoped>
.example {
  margin: 16px 0;
}
</style>

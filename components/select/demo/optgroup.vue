<docs>
---
order: 7
title:
  zh-CN: 分组
  en-US: Option Group
---

## zh-CN

用 `OptGroup` 或 `options.options` 进行选项分组。

## en-US

Using `OptGroup` or `options.options` to group the options.

</docs>

<template>
  <z-space>
    <z-select v-model:value="value" style="width: 200px" @change="handleChange">
      <z-select-opt-group>
        <template #label>
          <span>
            <user-outlined />
            Manager
          </span>
        </template>
        <z-select-option value="jack">Jack</z-select-option>
        <z-select-option value="lucy">Lucy</z-select-option>
      </z-select-opt-group>
      <z-select-opt-group label="Engineer">
        <z-select-option value="Yiminghe">yiminghe</z-select-option>
        <z-select-option value="Yiminghe1">yiminghe1</z-select-option>
      </z-select-opt-group>
    </z-select>
    <z-select
      v-model:value="value"
      :options="options"
      style="width: 200px"
      @change="handleChange"
    ></z-select>
  </z-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import type { SelectProps } from 'ant-design-vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const options = ref<SelectProps['options']>([
      {
        label: 'Manager',
        options: [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ],
      },
      {
        label: 'Engineer',
        options: [
          {
            value: 'yiminghe',
            label: 'Yiminghe',
          },
        ],
      },
    ]);

    return {
      value: ref(['lucy']),
      handleChange,
      options,
    };
  },
});
</script>

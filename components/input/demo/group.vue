<docs>
---
order: 6
title:
  zh-CN: 输入框组合
  en-US: Input Group
---

## zh-CN

输入框的组合展现。
注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

## en-US

Input.Group example
Note: You don't need `Col` to control the width in the `compact` mode.

</docs>
<template>
  <div>
    <z-input-group size="large">
      <z-row :gutter="8">
        <z-col :span="5">
          <z-input v-model:value="value1" />
        </z-col>
        <z-col :span="8">
          <z-input v-model:value="value2" />
        </z-col>
      </z-row>
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-input v-model:value="value1" style="width: 20%" />
      <z-input v-model:value="value2" style="width: 30%" />
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-select v-model:value="value3">
        <z-select-option value="Zhejiang">Zhejiang</z-select-option>
        <z-select-option value="Jiangsu">Jiangsu</z-select-option>
      </z-select>
      <z-input v-model:value="value4" style="width: 50%" />
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-select v-model:value="value5">
        <z-select-option value="Option1">Option1</z-select-option>
        <z-select-option value="Option2">Option2</z-select-option>
      </z-select>
      <z-input v-model:value="value6" style="width: 50%" />
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-input v-model:value="value7" style="width: 50%" />
      <z-date-picker v-model:value="value8" style="width: 50%" />
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-select v-model:value="value9">
        <z-select-option value="Option1-1">Option1-1</z-select-option>
        <z-select-option value="Option1-2">Option1-2</z-select-option>
      </z-select>
      <z-select v-model:value="value10">
        <z-select-option value="Option2-1">Option2-1</z-select-option>
        <z-select-option value="Option2-2">Option2-2</z-select-option>
      </z-select>
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-select v-model:value="value11">
        <z-select-option value="1">Between</z-select-option>
        <z-select-option value="2">Except</z-select-option>
      </z-select>
      <z-input
        v-model:value="value12"
        style="width: 100px; text-align: center"
        placeholder="Minimum"
      />
      <z-input
        v-model:value="value13"
        style="width: 30px; border-left: 0; pointer-events: none; background-color: #fff"
        placeholder="~"
        disabled
      />
      <z-input
        v-model:value="value14"
        style="width: 100px; text-align: center; border-left: 0"
        placeholder="Maximum"
      />
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-select v-model:value="value15">
        <z-select-option value="Sign Up">Sign Up</z-select-option>
        <z-select-option value="Sign In">Sign In</z-select-option>
      </z-select>
      <z-auto-complete
        v-model:value="value16"
        :options="[{ value: 'text 1' }, { value: 'text 2' }]"
        style="width: 200px"
        placeholder="Email"
      />
    </z-input-group>
    <br />
    <z-input-group compact>
      <z-select v-model:value="value17" style="width: 30%">
        <z-select-option value="Home">Home</z-select-option>
        <z-select-option value="Company">Company</z-select-option>
      </z-select>
      <z-cascader
        v-model:value="value18"
        style="width: 70%"
        :options="options"
        placeholder="Select Address"
      />
    </z-input-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const value1 = ref<string>('0571');
    const value2 = ref<string>('26888888');
    const value3 = ref<string>('Zhejiang');
    const value4 = ref<string>('Xihu District, Hangzhou');
    const value5 = ref<string>('Option1');
    const value6 = ref<string>('input content');
    const value7 = ref<string>('input content');
    const value8 = ref<string | null>(null);
    const value9 = ref<string>('Option1-1');
    const value10 = ref<string>('Option2-2');
    const value11 = ref<string>('1');
    const value12 = ref<string>('');
    const value13 = ref<string>('');
    const value14 = ref<string>('');
    const value15 = ref<string>('Sign Up');
    const value16 = ref<string>('');
    const value17 = ref<string>('Home');
    const value18 = ref<string[]>([]);

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
      value11,
      value12,
      value13,
      value14,
      value15,
      value16,
      value17,
      value18,
      options,
    };
  },
});
</script>

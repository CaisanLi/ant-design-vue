<docs>
---
order: 5
title:
  zh-CN: 表单布局
  en-US: Form Layout
---

## zh-CN

表单有三种布局。

## en-US

There are three layout for form: `horizontal`, `vertical`, `inline`.
</docs>

<template>
  <z-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <z-form-item label="Form Layout">
      <z-radio-group v-model:value="formState.layout">
        <z-radio-button value="horizontal">Horizontal</z-radio-button>
        <z-radio-button value="vertical">Vertical</z-radio-button>
        <z-radio-button value="inline">Inline</z-radio-button>
      </z-radio-group>
    </z-form-item>
    <z-form-item label="Field A">
      <z-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </z-form-item>
    <z-form-item label="Field B">
      <z-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </z-form-item>
    <z-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <z-button type="primary">Submit</z-button>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline';
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>

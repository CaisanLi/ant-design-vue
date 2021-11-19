<docs>
---
order: 8
title:
  zh-CN: useForm 合并错误信息
  en-US: useForm merge status info
---

## zh-CN

通过 [`Form.useForm`](#useForm)  合并展示表单校验信息。

## en-US

use [`Form.useForm`](#useForm)  combined display form verification information.
</docs>

<template>
  <z-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <z-form-item label="Activity name" required>
      <z-input v-model:value="modelRef.name" />
    </z-form-item>
    <z-form-item label="Activity zone" required>
      <z-select v-model:value="modelRef.region" placeholder="please select your zone">
        <z-select-option value="shanghai">Zone one</z-select-option>
        <z-select-option value="beijing">Zone two</z-select-option>
      </z-select>
    </z-form-item>
    <z-form-item label="Activity type" required>
      <z-checkbox-group v-model:value="modelRef.type">
        <z-checkbox value="1" name="type">Online</z-checkbox>
        <z-checkbox value="2" name="type">Promotion</z-checkbox>
        <z-checkbox value="3" name="type">Offline</z-checkbox>
      </z-checkbox-group>
    </z-form-item>
    <z-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos">
      <z-button type="primary" @click.prevent="onSubmit">Create</z-button>
      <z-button style="margin-left: 10px" @click="resetFields">Reset</z-button>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { reactive, toRaw, computed, defineComponent } from 'vue';
import { toArray } from 'lodash-es';
import { Form } from 'ant-design-vue';

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
      type: [
        {
          required: true,
          message: 'Please select type',
          type: 'array',
        },
      ],
    });
    const { resetFields, validate, validateInfos, mergeValidateInfo } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      errorInfos,
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.ant-form-explain) {
  white-space: pre-line;
}
</style>

<docs>
---
order: 24
title:
  zh-CN: 校验其他组件
  en-US: Other Form Controls
---

## zh-CN

以上演示没有出现的表单控件对应的校验演示。

## en-US

Demonstration of validation configuration for form controls which are not shown in the demos above.
</docs>
<template>
  <z-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <z-form-item label="Plain Text">
      <span class="ant-form-text">China</span>
    </z-form-item>
    <z-form-item
      name="select"
      label="Select"
      has-feedback
      :rules="[{ required: true, message: 'Please select your country!' }]"
    >
      <z-select v-model:value="formState.select" placeholder="Please select a country">
        <z-select-option value="china">China</z-select-option>
        <z-select-option value="usa">U.S.A</z-select-option>
      </z-select>
    </z-form-item>

    <z-form-item
      name="select-multiple"
      label="Select[multiple]"
      :rules="[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]"
    >
      <z-select
        v-model:value="formState['select-multiple']"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <z-select-option value="red">Red</z-select-option>
        <z-select-option value="green">Green</z-select-option>
        <z-select-option value="blue">Blue</z-select-option>
      </z-select>
    </z-form-item>

    <z-form-item label="InputNumber">
      <z-form-item name="input-number" no-style>
        <z-input-number v-model:value="formState['input-number']" :min="1" :max="10" />
      </z-form-item>
      <span class="ant-form-text">machines</span>
    </z-form-item>

    <z-form-item name="switch" label="Switch">
      <z-switch v-model:checked="formState.switch" />
    </z-form-item>

    <z-form-item name="slider" label="Slider">
      <z-slider
        v-model:value="formState.slider"
        :marks="{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }"
      />
    </z-form-item>

    <z-form-item name="radio-group" label="Radio.Group">
      <z-radio-group v-model:value="formState['radio-group']">
        <z-radio value="a">item 1</z-radio>
        <z-radio value="b">item 2</z-radio>
        <z-radio value="c">item 3</z-radio>
      </z-radio-group>
    </z-form-item>

    <z-form-item
      name="radio-button"
      label="Radio.Button"
      :rules="[{ required: true, message: 'Please pick an item!' }]"
    >
      <z-radio-group v-model:value="formState['radio-button']">
        <z-radio-button value="a">item 1</z-radio-button>
        <z-radio-button value="b">item 2</z-radio-button>
        <z-radio-button value="c">item 3</z-radio-button>
      </z-radio-group>
    </z-form-item>

    <z-form-item name="checkbox-group" label="Checkbox.Group">
      <z-checkbox-group v-model:value="formState['checkbox-group']">
        <z-row>
          <z-col :span="8">
            <z-checkbox value="A" style="line-height: 32px">A</z-checkbox>
          </z-col>
          <z-col :span="8">
            <z-checkbox value="B" style="line-height: 32px" disabled>B</z-checkbox>
          </z-col>
          <z-col :span="8">
            <z-checkbox value="C" style="line-height: 32px">C</z-checkbox>
          </z-col>
          <z-col :span="8">
            <z-checkbox value="D" style="line-height: 32px">D</z-checkbox>
          </z-col>
          <z-col :span="8">
            <z-checkbox value="E" style="line-height: 32px">E</z-checkbox>
          </z-col>
          <z-col :span="8">
            <z-checkbox value="F" style="line-height: 32px">F</z-checkbox>
          </z-col>
        </z-row>
      </z-checkbox-group>
    </z-form-item>

    <z-form-item name="rate" label="Rate">
      <z-rate v-model:value="formState.rate" allow-half />
    </z-form-item>

    <z-form-item name="upload" label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <z-upload
        v-model:fileList="formState.upload"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <z-button>
          <template #icon><UploadOutlined /></template>
          Click to upload
        </z-button>
      </z-upload>
    </z-form-item>

    <z-form-item label="Dragger">
      <z-form-item name="dragger" no-style>
        <z-upload-dragger v-model:fileList="formState.dragger" name="files" action="/upload.do">
          <p class="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </z-upload-dragger>
      </z-form-item>
    </z-form-item>

    <z-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <z-button type="primary" html-type="submit">Submit</z-button>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
    InboxOutlined,
  },
  setup() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formState = reactive<Record<string, any>>({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
    };
  },
});
</script>

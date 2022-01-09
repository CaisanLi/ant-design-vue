<docs>
---
order: 13
title:
  zh-CN: 后缀图标
  en-US: Suffix
---

## zh-CN

通过 `suffixIcon` 自定义后缀图标

## en-US

Customize the suffix icon through `suffixIcon`

</docs>

<template>
  <z-space direction="vertical">
    <z-date-picker @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </z-date-picker>
    <z-date-picker placeholder="Select month" picker="month" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </z-date-picker>
    <z-range-picker @change="onRangeChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </z-range-picker>
    <z-date-picker placeholder="Select week" picker="week" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </z-date-picker>
    <z-date-picker suffix-icon="ab" @change="onChange" />
    <z-date-picker suffix-icon="ab" placeholder="Select month" picker="month" @change="onChange" />
    <z-range-picker suffix-icon="ab" @change="onRangeChange" />
    <z-date-picker suffix-icon="ab" placeholder="Select week" picker="week" @change="onChange" />
  </z-space>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const onChange = (date: Dayjs | string, dateString: string) => {
      console.log(date, dateString);
    };

    const onRangeChange = (date: [Dayjs, Dayjs], dateString: [string, string]) => {
      console.log(date, dateString);
    };
    return {
      onChange,
      onRangeChange,
    };
  },
});
</script>

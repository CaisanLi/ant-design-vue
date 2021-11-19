<docs>
---
order: 3
title:
  zh-CN: 倒计时
  en-US: Countdown
---

## zh-CN

倒计时组件。

## en-US

Countdown component.

</docs>

<template>
  <z-row :gutter="16">
    <z-col :span="12">
      <z-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </z-col>
    <z-col :span="12">
      <z-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </z-col>
    <z-col :span="24" style="margin-top: 32px">
      <z-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
    </z-col>
  </z-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },
});
</script>

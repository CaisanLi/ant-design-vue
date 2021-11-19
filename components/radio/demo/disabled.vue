<docs>
---
order: 1
title:
  zh-CN: 不可用
  en-US: disabled
---

## zh-CN

Radio 不可用。

## en-US

Radio unavailable.

</docs>
<template>
  <div>
    <z-radio v-model:checked="checked1" :disabled="disabled">Disabled</z-radio>
    <br />
    <z-radio v-model:checked="checked2" :disabled="disabled">Disabled</z-radio>
    <div :style="{ marginTop: 20 }">
      <z-button type="primary" @click="toggleDisabled">Toggle disabled</z-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const disabled = ref<boolean>(true);
    const checked1 = ref<boolean>(false);
    const checked2 = ref<boolean>(false);

    const toggleDisabled = () => {
      disabled.value = !disabled.value;
    };

    return {
      disabled,
      checked1,
      checked2,
      toggleDisabled,
    };
  },
});
</script>

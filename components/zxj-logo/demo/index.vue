<template>
  <demo-sort>
    <Basic />
    <CustomStyle />
    <TitleLogo />
    <CustomTitle />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import TitleLogo from './titleLogo.vue';
import CustomStyle from './customstyle.vue';
import CustomTitle from './customtitle.vue';
import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    TitleLogo,
    CustomStyle,
    CustomTitle,
  },
  setup() {
    return {};
  },
});
</script>

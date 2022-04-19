<template>
  <div>
    <z-menu
      v-model:selected-keys="selectedKeys"
      :open-keys="openKeys"
      style="width: 256px"
      mode="inline"
    >
      <z-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <z-menu-item key="3">Option 3</z-menu-item>
        <z-menu-item key="4">Option 4</z-menu-item>
      </z-sub-menu>
    </z-menu>
    <z-button @click="open">展开</z-button>
  </div>
</template>
<script>
import { defineComponent, ref, watchEffect } from 'vue';
import { MailOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
  },
  setup() {
    const selectedKeys = ref(['1']);
    const openKeys = ref([]);
    const open = () => {
      openKeys.value.push('sub1');
      // openKeys.value = [...openKeys.value, 'sub1'];
    };
    const test = ref([1]);
    watchEffect(() => {
      console.log(111, test.value);
    });
    window.openKeys = openKeys;
    window.test = test;
    return {
      selectedKeys,
      openKeys,
      open,
    };
  },
});
</script>

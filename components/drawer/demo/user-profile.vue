<docs>
---
order: 6
title:
  zh-CN: 信息预览抽屉
  en-US: Preview drawer
---

## zh-CN

需要快速预览对象概要时使用，点击遮罩区关闭。

## en-US

Use Drawer to quickly preview details of an object, such as those in a list.

</docs>

<template>
  <z-list
    :data-source="[
      {
        name: 'Lily',
      },
      {
        name: 'Lily',
      },
    ]"
    bordered
  >
    <template #renderItem="{ item }">
      <z-list-item :key="`a-${item.id}`">
        <template #actions><a @click="showDrawer">View Profile</a></template>
        <z-list-item-meta description="Progresser XTech">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name }}</a>
          </template>
          <template #avatar>
            <z-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          </template>
        </z-list-item-meta>
      </z-list-item>
    </template>
  </z-list>
  <z-drawer width="640" placement="right" :closable="false" :visible="visible" @close="onClose">
    <p :style="[pStyle, pStyle2]">User Profile</p>
    <p :style="pStyle">Personal</p>
    <z-row>
      <z-col :span="12">
        <description-item title="Full Name" content="Lily" />
      </z-col>
      <z-col :span="12">
        <description-item title="Account" content="AntDesign@example.com" />
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="12">
        <description-item title="City" content="HangZhou" />
      </z-col>
      <z-col :span="12">
        <description-item title="Country" content="China🇨🇳" />
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="12">
        <description-item title="Birthday" content="February 2,1900" />
      </z-col>
      <z-col :span="12">
        <description-item title="Website" content="-" />
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="12">
        <description-item
          title="Message"
          content="Make things as simple as possible but no simpler."
        />
      </z-col>
    </z-row>
    <z-divider />
    <p :style="pStyle">Company</p>
    <z-row>
      <z-col :span="12">
        <description-item title="Position" content="Programmer" />
      </z-col>
      <z-col :span="12">
        <description-item title="Responsibilities" content="Coding" />
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="12">
        <description-item title="Department" content="XTech" />
      </z-col>
      <z-col :span="12">
        <description-item title="Supervisor">
          <template #content><a>Lin</a></template>
        </description-item>
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="24">
        <description-item
          title="Skills"
          content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
        />
      </z-col>
    </z-row>
    <z-divider />
    <p :style="pStyle">Contacts</p>
    <z-row>
      <z-col :span="12">
        <description-item title="Email" content="ant-design-vue@example.com" />
      </z-col>
      <z-col :span="12">
        <description-item title="Phone Number" content="+86 181 0000 0000" />
      </z-col>
    </z-row>
    <z-row>
      <z-col :span="24">
        <description-item title="Github">
          <template #content>
            <a href="https://github.com/vueComponent/ant-design-vue">
              github.com/vueComponent/ant-design-vue
            </a>
          </template>
        </description-item>
      </z-col>
    </z-row>
  </z-drawer>
</template>
<script lang="ts">
import descriptionItem from './descriptionItem/index.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    descriptionItem,
  },
  setup() {
    const visible = ref<boolean>(false);
    const pStyle = {
      fontSize: '16px',
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: '16px',
    };
    const pStyle2 = {
      marginBottom: '24px',
    };

    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    return {
      visible,
      pStyle,
      pStyle2,
      showDrawer,
      onClose,
    };
  },
});
</script>

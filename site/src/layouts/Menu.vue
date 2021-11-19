<template>
  <z-menu
    :inline-indent="30"
    class="aside-container menu-site"
    mode="inline"
    :selected-keys="[activeMenuItem]"
  >
    <z-menu-item v-if="showOverview" key="/components/overview">
      <router-link :to="getLocalizedPathname('/components/overview', isZhCN)">
        {{ isZhCN ? '组件总览' : 'Components Overview' }}
      </router-link>
    </z-menu-item>
    <template v-for="m in menus">
      <template v-if="m.children">
        <z-menu-item-group :key="m.order" :title="isZhCN ? m.title : m.enTitle">
          <template v-for="n in m.children">
            <z-menu-item v-if="n.path" :key="n.path">
              <a v-if="n.target" :target="n.target" :href="n.path">
                <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
              </a>
              <router-link v-else :to="getLocalizedPathname(n.path, isZhCN)">
                <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
              </router-link>
            </z-menu-item>
          </template>
        </z-menu-item-group>
      </template>
      <template v-else>
        <z-menu-item :key="m.path">
          <a v-if="m.target" :target="m.target" :href="m.path">
            {{ isZhCN ? `${m.title} ${m.subtitle || ''}` : m.enTitle || m.title }}
          </a>
          <router-link v-else :to="getLocalizedPathname(m.path, isZhCN)">
            {{ isZhCN ? `${m.title} ${m.subtitle || ''}` : m.enTitle || m.title }}
          </router-link>
        </z-menu-item>
      </template>
    </template>
  </z-menu>
</template>
<script lang="ts">
import { getLocalizedPathname } from '../utils/util';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'Menu',
  props: ['menus', 'isZhCN', 'activeMenuItem'],
  setup() {
    const route = useRoute();
    const showOverview = computed(() => {
      return route.path.indexOf('/components') === 0;
    });
    return {
      getLocalizedPathname,
      showOverview,
    };
  },
});
</script>
<style lang="less" scoped></style>

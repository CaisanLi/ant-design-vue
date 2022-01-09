import type { InjectionKey, Ref } from 'vue';
import { computed, inject, provide } from 'vue';
export interface TriggerContextProps {
  setPortal: (val?: any) => void;
  popPortal: boolean; // 将 portal 上传至父级元素渲染，不用考虑响应式
}
const TriggerContextKey: InjectionKey<TriggerContextProps> = Symbol('TriggerContextKey');
export const useProviderTrigger = () => {
  let portal = null;
  provide(TriggerContextKey, {
    setPortal(val) {
      portal = val;
    },
    popPortal: true,
  });
  return () => {
    return portal;
  };
};

export const useInjectTrigger = () => {
  return inject(TriggerContextKey, { setPortal: () => {}, popPortal: false });
};

export interface PortalContextProps {
  shouldRender: Ref<boolean>;
  inTriggerContext: boolean; // 仅处理 trigger 上下文的 portal
}
const PortalContextKey: InjectionKey<PortalContextProps> = Symbol('PortalContextKey');
export const useProvidePortal = (instance: any) => {
  provide(PortalContextKey, {
    inTriggerContext: true,
    shouldRender: computed(() => {
      const { sPopupVisible, popupRef, forceRender, autoDestroy } = instance;
      // if (popPortal) return true;
      let shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    }),
  });
};

export const useInjectPortal = () => {
  const portalContext = inject(PortalContextKey, {
    shouldRender: computed(() => false),
    inTriggerContext: false,
  });
  return {
    shouldRender: computed(
      () => portalContext.shouldRender.value || portalContext.inTriggerContext === false,
    ),
  };
};

import type { ExtractPropTypes, PropType } from 'vue';
import { defineComponent, computed, ref, watchEffect } from 'vue';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
const checkableCloseTagProps = () => ({
  prefixCls: String,
  checked: { type: Boolean, default: undefined },
  onChange: {
    type: Function as PropType<(checked: boolean) => void>,
  },
  visible: { type: Boolean, default: undefined },
  onClick: {
    type: Function as PropType<(e: MouseEvent) => void>,
  },
  'onUpdate:checked': Function as PropType<(checked: boolean) => void>,
  'onUpdate:visible': Function as PropType<(vis: boolean) => void>,
});
export type CheckableCloseTagProps = Partial<
  ExtractPropTypes<ReturnType<typeof checkableCloseTagProps>>
>;

const CheckableCloseTag = defineComponent({
  name: 'ZCheckableCloseTag',
  props: checkableCloseTagProps(),
  // emits: ['update:checked', 'change', 'click'],
  setup(props, { slots, emit }) {
    const { prefixCls } = useConfigInject('tag', props);
    const visible = ref(true);

    const handleClick = (e: MouseEvent) => {
      const { checked } = props;
      emit('update:checked', !checked);
      emit('change', !checked);
      emit('click', e);
    };
    watchEffect(() => {
      if (props.visible !== undefined) {
        visible.value = props.visible!;
      }
    });
    const handleCloseClick = (e: MouseEvent) => {
      e.stopPropagation();
      emit('update:visible', false);
      emit('close', e);

      if (e.defaultPrevented) {
        return;
      }
      if (props.visible === undefined) {
        visible.value = false;
      }
    };
    const cls = computed(() =>
      classNames(prefixCls.value, {
        [`${prefixCls.value}-checkable-close`]: true,
        [`${prefixCls.value}-checkable-close-checked`]: props.checked,
        [`${prefixCls.value}-hidden`]: !visible.value,
      }),
    );
    return () => {
      const renderCloseIcon = () => {
        return (
          <div class={`${prefixCls.value}-checkable-close-btn`}>
            <span class={`${prefixCls.value}-checkable-close-triangle`}></span>
            <CloseOutlined
              class={`${prefixCls.value}-checkable-close-icon`}
              onClick={handleCloseClick}
            />
          </div>
        );
      };
      return (
        <span class={cls.value} onClick={handleClick}>
          {slots.default?.()}
          {renderCloseIcon()}
        </span>
      );
    };
  },
});

export default CheckableCloseTag;

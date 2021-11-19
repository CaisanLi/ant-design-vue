import { getPropsSlot, initDefaultProps } from '../_util/props-util';
import type { ExtractPropTypes } from 'vue';
import { computed, defineComponent, inject } from 'vue';
import PropTypes from '../_util/vue-types';
import { defaultConfigProvider } from '../config-provider';
import { withInstall } from '../_util/type';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';
import logo8 from './images/logo8.png';
const imgUrlObj = {
  1: logo1,
  2: logo2,
  3: logo3,
  4: logo4,
  5: logo5,
  6: logo6,
  7: logo7,
  8: logo8,
};
export const logoProps = {
  prefixCls: PropTypes.string,
  number: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.VNodeChild,
  titleStyle: PropTypes.object,
};

export type LogoProps = Partial<ExtractPropTypes<typeof logoProps>>;

const Logo = defineComponent({
  name: 'ZLogo',
  props: initDefaultProps(logoProps, {
    number: 1,
    height: 50,
  }),
  slot: ['title'],
  setup(props, { slots }) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const title = getPropsSlot(slots, props, 'title');
    const { width, height, titleStyle } = props;
    const prefixClsRef = computed(() => configProvider.getPrefixCls('logo', props.prefixCls));
    return () => {
      const index = computed(() => {
        const { number } = props;
        return number;
      });
      const url = imgUrlObj[index.value] || logo1;
      const classString = computed(() => {
        const prefixCls = prefixClsRef.value;
        return {
          [prefixCls]: true,
        };
      });
      const elementProps = {
        class: [classString.value],
      };
      const imgProps = {
        class: 'ant-logo-img',
        style: { width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' },
      };
      return (
        <div {...elementProps}>
          <img src={url} {...imgProps} />
          {title ? (
            <div class="ant-logo-title" style={titleStyle}>
              {title}
            </div>
          ) : (
            ''
          )}
        </div>
      );
    };
  },
});

export default withInstall(Logo);

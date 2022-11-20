import { mount } from '@vue/test-utils';
import Custom from '@/src/custom/index.ts';

describe('Custom 组件测试', () => {
  test('Custom 测试', () => {
    const wrapper = mount({
      render() {
        return <Custom />;
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});


import { mount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';
import Home from '@/components/Home.vue';

describe('Menu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Menu);
    expect(wrapper.vm).toBeTruthy();
  });
});
describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home);
    expect(wrapper.vm).toBeTruthy();
  });
});

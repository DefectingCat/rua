<template>
  <div
    ref="wrapper"
    class="
      card
      rounded-xl
      transition-all
      bg-light-50
      cursor-pointer
      overflow-hidden
      max-w-40rem
    "
  >
    <a :href="url" target="_blank">
      <div class="p-2">
        <Loading v-if="loading" />
        <img
          v-show="!loading"
          :src="src"
          alt=""
          class="rounded-xl"
          @load="handleLoading"
        />
      </div>

      <div class="p-6">
        <div class="mb-3 text-gray-400">
          <span class="">{{ repo }}</span>
        </div>
        <h4 class="font-500 text-3xl">{{ title }}</h4>
        <p class="mt-4 min-h-12">{{ desc }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  ref,
} from '@nuxtjs/composition-api';
import Loading from '../common/Loading.vue';
import useLazyload from '~/hooks/useLazyload';

export default defineComponent({
  name: 'ProjectCard',
  components: {
    Loading,
  },
  props: {
    repo: { type: String as PropType<string>, require: true },
    title: { type: String as PropType<string>, require: true },
    img: { type: String as PropType<string>, require: true },
    desc: { type: String as PropType<string>, require: true },
    url: { type: String as PropType<string>, require: true },
  },
  setup({ img }) {
    const loading = ref(true);
    const src = ref('');
    const wrapper = ref<HTMLElement>();

    /**
     * 加载完成时的回调
     * 将 loading 隐藏
     */
    const handleLoading = () => {
      loading.value = false;
    };

    /**
     * 进入视口时的回调
     * 将 src 设置为正确的地址，并发送请求
     */
    const loadCallback = () => {
      img && (src.value = img);
    };

    onMounted(async () => {
      await nextTick();
      useLazyload(wrapper.value, loadCallback);
    });

    return {
      loading,
      src,
      wrapper,
      handleLoading,
    };
  },
});
</script>

<style scoped lang="scss"></style>

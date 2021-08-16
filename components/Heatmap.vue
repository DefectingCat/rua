<template>
  <div class="pb-16">
    <CardTitle title="Commits" sub-title="github" />

    <div class="grid grid-cols-12 gap-x-8 p-4 <sm:gap-x-0">
      <div class="col-span-2 <sm:hidden"></div>
      <div class="col-span-8 flex justify-center <sm:col-span-12">
        <Loading v-if="loading" ref="img" />
        <img
          v-show="!loading"
          class="w-full"
          :src="src"
          @load="handleLoading"
        />
      </div>
      <div class="col-span-2 <sm:hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
} from '@nuxtjs/composition-api';
import CardTitle from './common/CardTitle.vue';
import Loading from './common/Loading.vue';
import config from '@/config/backendConfig';
import useLazyload from '@/hooks/useLazyload';

export default defineComponent({
  name: 'Heatmap',
  components: {
    CardTitle,
    Loading,
  },
  setup() {
    const loading = ref(true);
    const src = ref('');
    const img = ref();

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
      src.value = config.heatmap;
    };

    onMounted(async () => {
      await nextTick();
      useLazyload(img.value.$el, loadCallback);
    });

    return {
      loading,
      handleLoading,
      src,
      img,
    };
  },
});
</script>

<style scoped lang="scss"></style>

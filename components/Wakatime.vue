<template>
  <div class="waka-bg pb-10">
    <CardTitle title="咸鱼之力" sub-title="Coding time" font-size="3xl" />

    <div
      ref="wakaRef"
      class="grid grid-cols-12 gap-x-8 p-4 <sm:gap-x-0 <sm:gap-y-8"
    >
      <div class="col-span-2 <sm:hidden"></div>
      <div class="col-span-4 relative <sm:col-span-12">
        <Loading
          v-if="loading"
          class="absolute top-0 left-0 right-0 bottom-0"
        />

        <embed :src="waka1" @load="handleLoading" />
      </div>
      <div class="col-span-4 relative <sm:col-span-12">
        <Loading
          v-if="loading"
          class="absolute top-0 left-0 right-0 bottom-0"
        />

        <embed :src="waka2" @load="handleLoading" />
      </div>
      <div class="col-span-2 <sm:hidden"></div>
    </div>

    <div class="grid grid-cols-12 gap-x-8 <sm:gap-x-0 p-4">
      <div class="col-span-2 <sm:hidden"></div>

      <ColorBtn @click="refreshWaka">Refresh</ColorBtn>
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
import backend from '@/config/backendConfig';
import Loading from '@/components/common/Loading.vue';
import useLazyload from '@/hooks/useLazyload';
import ColorBtn from '@/components/common/ColorBtn.vue';
import useAxios from '@/hooks/useAxios';

export default defineComponent({
  name: 'Wakatime',
  components: {
    CardTitle,
    Loading,
    ColorBtn,
  },
  setup() {
    const wakaRef = ref<HTMLElement>();
    const waka1 = ref('');
    const waka2 = ref('');
    const loading = ref(true);
    const $axios = useAxios();

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
      waka1.value = backend.waka1;
      waka2.value = backend.waka2;
    };

    onMounted(async () => {
      await nextTick();
      wakaRef.value && useLazyload(wakaRef.value, loadCallback);
    });

    /**
     * 手动更新后端 waka 图表缓存
     */
    const refreshWaka = async () => {
      loading.value = true;
      // 加载状态开始后，将 src 置空
      waka1.value = '';
      waka2.value = '';
      const { data } = await $axios.post<{ status: string }>('waka/update');
      if (data.status === 'ok') {
        // 后端响应更新完成后，重新加载图表
        loadCallback();
      }
    };

    return {
      wakaRef,
      loading,
      waka1,
      waka2,
      handleLoading,
      refreshWaka,
    };
  },
});
</script>

<style scoped lang="scss">
// .waka-bg {
//   background-color: #fff;
// }
</style>

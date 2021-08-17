<template>
  <div
    ref="footerRef"
    class="footer flex justify-center items-center relative p-4"
  >
    <div class="text-3xl <sm:text-xl">
      <span class="footer-typed"></span>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
} from '@nuxtjs/composition-api';
import Typed from 'typed.js';
import useHitokoto from '@/hooks/useHitokoto';
import useLazyload from '@/hooks/useLazyload';

export default defineComponent({
  name: 'Footer',
  setup() {
    const { hitokoto, fetchHitokoto } = useHitokoto();
    const footerRef = ref();

    const hitokotoCallback = async () => {
      await fetchHitokoto();

      const options = {
        strings: [hitokoto.value],
        typeSpeed: 88,
        cursorChar: '❤️',
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = new Typed('.footer-typed', options);
    };

    onMounted(async () => {
      await nextTick();
      useLazyload(footerRef.value, hitokotoCallback);
    });

    return {
      footerRef,
    };
  },
});
</script>

<style scoped lang="scss">
.footer {
  // background-color: #f5f7f9;
  height: calc(100vh - 3rem);
}
</style>

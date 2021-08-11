<template>
  <div class="grid grid-cols-12 gap-x-8 p-4">
    <div class="col-span-2"></div>
    <h2
      class="
        col-span-8
        font-zh font-500
        text-5xl
        my-8
        <sm:text-4xl <sm:text-center
      "
    >
      {{ title }}/<span class="text-2xl">{{ subTitle }}</span>
    </h2>
    <div class="col-span-2"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'CardTitle',
  props: {
    title: String as PropType<string>,
    subTitle: String as PropType<string>,
  },
  setup() {},
});
</script>

<style scoped lang="scss"></style>

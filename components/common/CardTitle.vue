<template>
  <div class="grid grid-cols-12 gap-x-8 p-4">
    <div class="col-span-2"></div>
    <h2
      :class="`
        col-span-8
font-500
        text-5xl
        my-8
        <sm:text-${fontSize} <sm:text-center`"
    >
      {{ title }}<span class="text-2xl <sm:hidden">/{{ subTitle }}</span>
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
    fontSize: {
      type: String as PropType<string>,
      default: '4xl',
    },
  },
  setup() {},
});
</script>

<style scoped lang="scss"></style>

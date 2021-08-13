<template>
  <div class="card rounded-xl transition-all bg-light-50 cursor-pointer">
    <a :href="url" target="_blank">
      <div>
        <img :src="img" alt="" class="h-40" />
      </div>
      <div class="p-6">
        <div class="mb-3 text-gray-400">
          <span class="">{{ repo }}</span>
        </div>
        <h4 class="font-zh font-500 text-3xl">{{ title }}</h4>
        <p class="mt-4 min-h-12">{{ desc }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    repo: { type: String as PropType<string>, require: true },
    title: { type: String as PropType<string>, require: true },
    img: { type: String as PropType<string>, require: true },
    desc: { type: String as PropType<string>, require: true },
    url: { type: String as PropType<string>, require: true },
  },
  setup() {},
});
</script>

<style scoped lang="scss"></style>

<template>
  <div class="card rounded-xl transition-all bg-light-50 cursor-pointer">
    <a :href="`${blogURL}${url}`" target="_blank">
      <div class="p-8">
        <div class="flex justify-between">
          <h2 class="text-2xl">{{ title }}</h2>
          <span class="text-gray-300">{{ time }}</span>
        </div>

        <div class="mt-4">
          {{ content }}
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import config from '@/config/backendConfig';

export default defineComponent({
  name: 'BlogCard',
  props: {
    title: String as PropType<string>,
    content: String as PropType<string>,
    time: String as PropType<string>,
    url: String as PropType<string>,
  },
  setup() {
    return {
      blogURL: config.blogURL,
    };
  },
});
</script>

<style scoped lang="scss"></style>

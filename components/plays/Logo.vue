<template>
  <div class="p-8">
    <embed class="w-full" :src="logo" type="image/svg+xml" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'Logo',
  props: {
    logo: String as PropType<string>,
  },
  setup() {},
});
</script>

<style scoped lang="scss"></style>

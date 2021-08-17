<template>
  <div class="widget h-12 flex justify-center items-center">
    <span>Powered by</span>
    <span class="mx-2">💚</span>
    <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'FooterWidget',
  setup() {},
});
</script>

<style scoped lang="scss">
.widget {
  background-color: #f5f7f9;
}
</style>

<template>
  <div class="h-screen">
    <Menu />
    <div class="flex items-center home-body">
      <h1 class="text-7xl font-bold">Hi</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'Home',
  setup() {},
});
</script>

<style scoped lang="scss">
.home-body {
  height: calc(100vh - (3rem + 50px));
}
</style>

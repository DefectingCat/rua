<template>
  <button
    class="btn card col-span-8 outline-none <sm:col-span-12"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ColorBtn',
  setup() {},
});
</script>

<style scoped lang="scss">
.btn {
  @apply h-14 w-34 rounded-4xl bg-gradient-to-tr from-green-300 to-blue-300;
}
</style>

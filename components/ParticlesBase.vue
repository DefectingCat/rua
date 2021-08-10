<template>
  <client-only>
    <Particles id="tsparticles" class="absolute -z-10" :options="option" />
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import option from '@/config/particles.conf';

export default defineComponent({
  name: 'ParticlesBase',
  setup() {
    return {
      option,
    };
  },
});
</script>

<style scoped lang="scss"></style>

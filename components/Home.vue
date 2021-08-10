<template>
  <div>
    <no-ssr>
      <Particles id="tsparticles" class="absolute -z-10" :options="option" />
    </no-ssr>

    <div class="h-screen">
      <Menu />
      <div
        class="flex items-center xl:mx-22rem md:mx-10rem sm:mx-8 mx-4 home-body"
      >
        <h1
          class="
            xl:text-7xl
            md:text-6xl
            sm:text-5xl
            text-5xl
            xl:font-900 xl:leading-snug
            leading-tight
            font-700
          "
        >
          Hi! I'm Arthur.
          <br />
          I'm a <span class="typed"></span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from '@nuxtjs/composition-api';
import Typed from 'typed.js';
import option from './particles.conf';

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(async () => {
      await nextTick();

      const options = {
        strings: ['Developer.', 'Artist?', 'Player!'],
        typeSpeed: 66,
        backSpeed: 50,
        backDelay: 1500,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const typed = new Typed('.typed', options);
    });

    return {
      option,
    };
  },
});
</script>

<style scoped lang="scss">
.home-body {
  height: calc(100vh - (3rem + 50px));
}
</style>

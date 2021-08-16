<template>
  <div class="play">
    <CardTitle title="Play with" sub-title="me" />

    <div class="grid grid-cols-12 gap-x-8">
      <div class="col-span-2 col-start-1 row-span-4"></div>
      <Logo
        v-for="logo of logos"
        :key="logo"
        :logo="logo"
        class="col-span-4 mb-8"
      />
      <div class="col-span-2 col-start-1 row-span-4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CardTitle from './common/CardTitle.vue';
import Logo from './plays/Logo.vue';

export default defineComponent({
  name: 'PlayWithMe',
  components: {
    CardTitle,
    Logo,
  },
  setup() {
    const logos = [
      require('@/static/logos/playstation.svg'),
      require('@/static/logos/xbox.svg'),
      require('@/static/logos/nintendo.svg'),
      require('@/static/logos/steam.svg'),
      require('@/static/logos/epic.svg'),
      require('@/static/logos/blizzard.svg'),
    ];

    return {
      logos,
    };
  },
});
</script>

<style scoped lang="scss">
.play {
  background-color: #fff;
}
</style>

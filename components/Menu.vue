<template>
  <div class="flex justify-center">
    <div
      class="
        w-full
        mt-8
        mb-4
        xl:mx-22rem
        md:mx-10rem
        sm:mx-8
        mx-4
        flex
        justify-between
        items-center
      "
    >
      <img src="../static/tx-1.png" alt="" class="w-50px" />
      <div class="flex justify-evenly">
        <a
          v-for="item of menus"
          :key="item.id"
          :href="item.href"
          target="_blank"
          class="sm:mx-4 mx-2 font-bold"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'Menu',
  setup() {
    const menus = reactive([
      {
        id: 0,
        href: 'https://www.defectink.com',
        name: 'Blog',
      },
      {
        id: 1,
        href: 'https://www.github.com',
        name: 'Github',
      },
      {
        id: 2,
        href: 'https://www.github.com',
        name: 'Github',
      },
    ]);

    return {
      menus,
    };
  },
});
</script>

<style scoped lang="scss"></style>

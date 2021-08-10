<template>
  <div
    class="
      bg-light-200
      rounded-xl
      grid grid-cols-12
      gap-x-16
      items-center
      py-4rem
      <sm:grid-rows-[1fr,60px]
      <xl:gap-x-8
      <md:py-3rem
      <sm:py-1rem <sm:items-end
    "
  >
    <div class="col-span-2 w-auto"></div>
    <div class="col-span-4 flex justify-center items-center <sm:col-start-5">
      <img
        class="
          w-200px
          h-200px
          <md:w-140px <md:h-140px
          <sm:w-100px <sm:h-100px
          rounded-1/2
        "
        src="../static/mona.jpg"
        alt="avatar"
      />
    </div>

    <div
      class="
        col-span-4
        <sm:row-start-2 <sm:col-start-5 <sm:justify-center
        flex
        font-zh
        text-lg
      "
    >
      <p>一条咸鱼。</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'Bio',
  setup() {},
});
</script>

<style scoped lang="scss"></style>

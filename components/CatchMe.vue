<template>
  <div class="catch-me pb-8">
    <CardTitle title="Catch me" sub-title="in somewhere" />

    <div class="grid grid-cols-12 gap-x-8 p-4 <sm:gap-x-0">
      <div class="col-span-2 col-start-1 <sm:hidden"></div>
      <div
        class="
          col-span-8
          flex
          items-center
          justify-evenly
          <sm:col-span-12 <sm:flex-wrap
        "
      >
        <div
          v-for="item of info"
          :key="item.name"
          class="img-wrapper <sm:w-[25%] <sm:pb-4 cursor-pointer"
        >
          <a :href="item.url" target="_blank">
            <img :src="require(`@/static/logos/${item.logo}.svg`)" alt="" />
          </a>
        </div>
      </div>
      <div class="col-span-2 col-start-1 <sm:hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CardTitle from './common/CardTitle.vue';
import info from '@/assets/catchMeInfo';

export default defineComponent({
  name: 'CatchMe',
  components: {
    CardTitle,
  },
  setup() {
    return {
      info,
    };
  },
});
</script>

<style scoped lang="scss">
.catch-me {
  background-color: #f5f7f9;
  & .img-wrapper {
    transition: all 0.3s ease;
  }
  & .img-wrapper:hover {
    transition: all 0.3s ease;
    transform: scale(1.5);
  }
}
</style>

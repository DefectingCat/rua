<template>
  <div class="waka-bg pb-10">
    <CardTitle title="咸鱼之力" sub-title="Coding time" font-size="3xl" />

    <div class="grid grid-cols-12 gap-x-8 p-4 <sm:gap-x-0 <sm:gap-y-8">
      <div class="col-span-2 <sm:hidden"></div>
      <!-- @TODO 后端缓存 -->
      <div class="col-span-4 <sm:col-span-12">
        <figure>
          <embed :src="waka1" />
        </figure>
      </div>
      <div class="col-span-4 <sm:col-span-12">
        <figure>
          <embed :src="waka2" />
        </figure>
      </div>
      <div class="col-span-2 <sm:hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CardTitle from './common/CardTitle.vue';
import backend from '@/config/backendConfig';

export default defineComponent({
  name: 'Wakatime',
  components: {
    CardTitle,
  },
  setup() {
    return {
      waka1: backend.waka1,
      waka2: backend.waka2,
    };
  },
});
</script>

<style scoped lang="scss">
.waka-bg {
  background-color: #fff;
}
</style>

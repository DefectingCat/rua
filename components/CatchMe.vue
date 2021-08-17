<template>
  <div class="catch-me pb-8">
    <CardTitle title="Catch Me" />
    test
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CardTitle from './common/CardTitle.vue';

export default defineComponent({
  name: 'CatchMe',
  components: {
    CardTitle,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
.catch-me {
  background-color: #f5f7f9;
}
</style>

<template>
  <div class="blog">
    <CardTitle title="博客" sub-title="Blog posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CardTitle from './common/CardTitle.vue';

export default defineComponent({
  name: 'BlogPosts',
  components: {
    CardTitle,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
.blog {
  background-color: #f5f7f9;
}
</style>

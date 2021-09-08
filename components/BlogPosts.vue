<template>
  <div ref="blog" class="blog pb-8">
    <CardTitle title="博客" sub-title="Blog posts" />
    <div class="grid grid-cols-12 gap-x-8 p-4 <sm:gap-x-0">
      <div class="col-span-2 col-start-1 row-span-4 <sm:hidden"></div>
      <!-- 在数据未到之前，需要遍历 6 次来创建 loading -->
      <template v-if="posts == null">
        <BlogCard
          v-for="post of 6"
          :key="post"
          :loading="true"
          class="col-span-4 mb-8 <sm:col-span-12"
        />
      </template>
      <template v-else>
        <BlogCard
          v-for="post of posts"
          :key="post.url"
          v-bind="post"
          class="col-span-4 mb-8 <sm:col-span-12"
        />
      </template>
      <div class="col-span-2 col-start-11 row-span-4 <sm:hidden"></div>
    </div>

    <div class="grid grid-cols-12 gap-x-8 <sm:gap-x-0 p-4">
      <div class="col-span-2 <sm:hidden"></div>

      <ColorBtn @click="toBlog">Read More</ColorBtn>
      <div class="col-span-2 <sm:hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import BlogCard from './blog/BlogCard.vue';
import CardTitle from './common/CardTitle.vue';
import usePosts from '@/hooks/usePosts';
import config from '@/config/backendConfig';
import ColorBtn from '@/components/common/ColorBtn.vue';

export default defineComponent({
  name: 'BlogPosts',
  components: {
    CardTitle,
    BlogCard,
    ColorBtn,
  },
  setup() {
    const blog = ref<HTMLElement>();
    const { posts } = usePosts(blog);

    return {
      blog,
      posts,
      blogURL: config.blogURL,
      toBlog: () => window.open(config.blogURL),
    };
  },
});
</script>

<style scoped lang="scss">
.blog {
  background-color: #f5f7f9;
}
.btn {
  @apply h-14 w-34 rounded-4xl bg-gradient-to-tr from-green-300 to-blue-300;
}
</style>

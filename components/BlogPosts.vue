<template>
  <div ref="blog" class="blog pb-8">
    <CardTitle title="博客" sub-title="Blog posts" />

    <!-- 在数据未到之前，需要遍历 6 次来创建 loading -->
    <div v-if="posts == null" class="grid grid-cols-12 gap-x-8">
      <div class="col-span-2 col-start-1 row-span-4"></div>
      <BlogCard
        v-for="post of 6"
        :key="post"
        :loading="true"
        class="col-span-4 mb-8"
      />
      <div class="col-span-2 col-start-11 row-span-4"></div>
    </div>

    <div v-else class="grid grid-cols-12 gap-x-8">
      <div class="col-span-2 col-start-1 row-span-4"></div>
      <BlogCard
        v-for="post of posts"
        :key="post.url"
        v-bind="post"
        class="col-span-4 mb-8"
      />
      <div class="col-span-2 col-start-11 row-span-4"></div>
    </div>

    <div class="grid grid-cols-12 gap-x-8">
      <div class="col-span-2"></div>
      <button class="btn card col-span-8 outline-none" @click="toBlog">
        Read More
      </button>
      <div class="col-span-2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import BlogCard from './blog/BlogCard.vue';
import CardTitle from './common/CardTitle.vue';
import usePosts from '@/hooks/usePosts';
import config from '@/config/backendConfig';

export default defineComponent({
  name: 'BlogPosts',
  components: {
    CardTitle,
    BlogCard,
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

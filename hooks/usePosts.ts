import { ref, Ref, onMounted, nextTick } from '@nuxtjs/composition-api';
import useLazyload from './useLazyload';
import useAxios from '@/hooks/useAxios';

export interface Post {
  title: string;
  content: string;
  time: string;
  url: string;
}

/**
 * 创建并发送 xhr 请求，获取 blog post
 * @param target blog post 对应的 DOM，用于判断是否与视口相交
 * @returns
 */
const usePosts = (target: Ref<HTMLElement | undefined>) => {
  const $axios = useAxios();
  const posts = ref<Post[]>();

  // const { fetch, fetchState } = useFetch(async () => {
  //   posts.value = await $axios.$get('/blog');
  // });
  const fetchPost = async () => {
    posts.value = await $axios.$get('/blog');
  };

  /**
   * observe post对应的 DOM
   * 当其出现在视口时，发送获取文章请求
   */
  onMounted(async () => {
    await nextTick();
    useLazyload(target.value, fetchPost); // observer
  });

  return {
    posts,
    fetchPost,
  };
};

export default usePosts;

import { ref, Ref, onMounted } from '@nuxtjs/composition-api';
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
  onMounted(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].intersectionRatio <= 0) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchPost();
            observer.unobserve(entry.target); // 加载后取消 observe，避免重复发送请求
          }
        });
      }
    );
    target.value && intersectionObserver.observe(target.value);
  });

  return {
    posts,
    fetchPost,
  };
};

export default usePosts;

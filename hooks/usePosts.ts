import { ref, useFetch } from '@nuxtjs/composition-api';
import useAxios from '@/hooks/useAxios';

export interface Post {
  title: string;
  content: string;
  time: string;
  url: string;
}

const usePosts = () => {
  const $axios = useAxios();
  const posts = ref<Post[]>();

  const { fetch, fetchState } = useFetch(async () => {
    posts.value = await $axios.$get('/blog');
  });
  // const fetchPost = async () => {
  //   posts.value = await $axios.$get('/blog');
  // };

  // onMounted(() => {
  //   fetch();
  // });

  return {
    posts,
    fetch,
    fetchState,
  };
};

export default usePosts;

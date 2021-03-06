import { ref } from '@nuxtjs/composition-api';
import useAxios from '@/hooks/useAxios';

const URL = 'https://v1.hitokoto.cn';

// Generated by https://quicktype.io

/* eslint-disable camelcase */
export interface Hitokoto {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

const useHitokoto = () => {
  const $axios = useAxios();
  const hitokoto = ref<string>();

  const fetchHitokoto = async () => {
    const data = await $axios.$get<Hitokoto>(URL, {
      params: {
        c: 'i',
      },
    });
    data && (hitokoto.value = data.hitokoto);
  };

  return {
    hitokoto,
    fetchHitokoto,
  };
};

export default useHitokoto;

<template>
  <div class="project">
    <div class="grid grid-cols-12 gap-x-8 p-4">
      <div class="col-span-2"></div>
      <h2 class="col-span-8 font-zh font-500 text-5xl my-12">
        项目/<span class="text-3xl">Projects</span>
      </h2>
      <div class="col-span-2"></div>
    </div>

    <div
      v-for="(project, index) in projects"
      :key="project + index"
      class="grid grid-cols-12 gap-x-8 p-4"
    >
      <div class="col-span-2"></div>
      <div v-for="item of project" :key="item.img" class="col-span-4">
        <ProjectCard v-bind="item" />
      </div>
      <div class="col-span-2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import ProjectCard from './projects/ProjectCard.vue';

export default defineComponent({
  name: 'Projects',
  components: {
    ProjectCard,
  },
  setup() {
    const projects = reactive([
      [
        {
          repo: 'Github',
          title: 'Notedly',
          img: '',
          desc: 'This is a test',
        },
        {
          repo: 'Github',
          title: 'Notedly',
          img: '',
          desc: 'This is a test',
        },
      ],
      [
        {
          repo: 'Github',
          title: 'Notedly',
          img: '',
          desc: 'This is a test',
        },
        {
          repo: 'Github',
          title: 'Notedly',
          img: '',
          desc: 'This is a test',
        },
      ],
    ]);

    return {
      projects,
    };
  },
});
</script>

<style scoped lang="scss">
.project {
  background-color: #f5f7f9;
}
</style>

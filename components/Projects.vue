<template>
  <div class="project pb-10">
    <CardTitle title="项目" sub-title="Projects" />

    <div
      v-for="(project, index) in projectInfo"
      :key="`${project} ${index}`"
      class="grid grid-cols-12 gap-x-8 p-4 <sm:gap-x-0 <sm:gap-y-8"
    >
      <div class="col-span-2 <sm:hidden"></div>
      <div
        v-for="item of project"
        :key="item.img"
        class="col-span-4 <sm:col-span-12 justify-self-center"
      >
        <ProjectCard v-bind="item" />
      </div>
      <div class="col-span-2 <sm:hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ProjectCard from './projects/ProjectCard.vue';
import CardTitle from './common/CardTitle.vue';
import projectInfo from '@/assets/projectInfo';

export default defineComponent({
  name: 'Projects',
  components: {
    CardTitle,
    ProjectCard,
  },
  setup() {
    return {
      projectInfo,
    };
  },
});
</script>

<style scoped lang="scss">
.project {
  background-color: #f5f7f9;
}
</style>

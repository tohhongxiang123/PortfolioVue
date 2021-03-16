<template>
  <div class="projects page">
    <div class="content">
      <section class="header">
        <h1 class="title">Projects</h1>
        <p class="text-muted"><i>A small collection of personal projects</i></p>
      </section>

      <section class="project-list">
        <ProjectTile v-for="project in projects" 
        :project="project"
        :key="project.title"/>
      </section>

      <section>
        <h3>Interested to work with me?</h3>
        <router-link to="/contact" class="btn btn-primary">Contact me</router-link>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  text-align: center;
}

.project-tile:not(:last-child) {
  border-bottom: 2px solid #eee;
}
</style>

<script>
import ProjectTile from '../components/ProjectTile.vue'
import projects from '@/assets/projectData.js'

export default {
  data() {
    return {
      projects
    }
  },
  components: {
    ProjectTile
  }
}
</script>
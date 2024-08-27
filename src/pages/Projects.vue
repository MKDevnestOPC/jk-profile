<script setup>
    import {ref} from "vue"
    import ProjectCardVue from "@/components/ProjectCard.vue";

    const project = ref([])
    fetch('/data.json')
      .then(response => response.json())
      .then(data => project.value = data.projectItems).catch(error => console.error('Error fetching data:', error));
</script>

<template>
    <section id="projects" class="w-full py-20  border-b border-gray-600">
        <div class="mb-10">
            <h3 class="capitalize">projects</h3>
            <h1 class="text-gradient2 text-4xl font-bold font-titleFont">Example My acknowledge.</h1>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 lg:gap-16">
            <ProjectCardVue v-for="item in project" :key="item.title" :project="item"/>
        </div>
    </section>
</template>

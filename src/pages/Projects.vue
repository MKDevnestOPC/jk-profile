<script setup>
    import ProjectCardVue from "@/components/ProjectCard.vue";
    import {useData} from '@/composables/useData.js'
    const {projectItems} = useData();

</script>

<template>
    <section id="projects" class="w-full py-20  border-b border-gray-600">
        <div class="mb-10">
            <h3 class="capitalize">projects</h3>
            <h1 class="text-gradient2 text-4xl font-bold font-titleFont">Example My acknowledge.</h1>
        </div>

        <div class="grid grid-cols-3 gap-16">
            <ProjectCardVue v-for="item in projectItems" :key="item.title" :project="item"/>
        </div>
    </section>
</template>

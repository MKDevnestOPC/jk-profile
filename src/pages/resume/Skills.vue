
<script setup>
import SkillItem from "@/pages/resume/SkillItem.vue";
import { useData } from "@/composables/useData";
const {designSkills, developmentSkills} = useData();

</script>

<template>
    <div v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
    }"  class="flex items-start gap-20">
            <div class="flex-1">
            <div class="py-12 font-titleFont gap-6 flex flex-col">
                <p class="text-sm text-orange-200 tracking-[4px]">Features</p>
                <h2 class="capitalize text-gradient2 text-4xl font-bold">Frontend Development</h2>
            </div>

            <div class="mt-10 w-full flex flex-col gap-1">
                <SkillItem v-for="item in designSkills" :key="item.title" :skill="item"/>
            </div>
        </div>





        <div class="flex-1">
            <div class="py-12 font-titleFont gap-6 flex flex-col">
                <p class="text-sm text-orange-200 tracking-[4px]">Features</p>
                <h2 class="capitalize text-gradient2 text-4xl font-bold">Backend Development</h2>
            </div>


            <div class="mt-10 w-full flex flex-col gap-1">
                <SkillItem v-for="item in developmentSkills" :key="item.title" :skill="item"/>
            </div>
        </div>
    </div>
</template>
<style>

</style>
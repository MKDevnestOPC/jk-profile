
<script setup>
import ResumeCard from "@/pages/resume/ResumeCard.vue";
import { useData } from "@/composables/useData";
const {educationLavel, trainingQualification} = useData();

</script>

<template>
    <div v-motion
    :initial="{
      opacity: 0,
    }" 
    :enter="{
      opacity: 1,
    }" class="flex items-center gap-20">
        <div class="flex-1">
        <!-- education sectoion start -->
        <div class="py-12 font-titleFont gap-6 flex flex-col">
            <p class="text-sm text-orange-200 tracking-[4px]">2016 - 2023</p>
            <h2 class="capitalize text-gradient2 text-4xl font-bold">education quality</h2>
        </div>

        <div class="mt-14 w-full border-l-[6px] border-l-black h-[800px] border-opacity-30 flex flex-col gap-10">
            <ResumeCard v-for="item in educationLavel" :key="item.title" :eduction="item"/>
        </div>
        <!-- eduction section end -->
        </div>

        <div class="flex-1">
        <!-- Job Exprience sectoion start -->
        <div class="py-12 font-titleFont gap-6 flex flex-col">
            <p class="text-sm text-orange-200 tracking-[4px]">2020 - Current</p>
            <h2 class="capitalize text-gradient2 text-4xl font-bold">Training experience</h2>
        </div>

        <div class="mt-14 w-full border-l-[6px] border-l-black h-[800px] border-opacity-30 flex flex-col gap-10">
            <ResumeCard v-for="item in trainingQualification" :key="item.title" :eduction="item"/>
        </div>
        <!-- Job Exprience section end -->
        </div>
    </div>
</template>
<style>

</style>
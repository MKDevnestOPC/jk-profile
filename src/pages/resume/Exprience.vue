<script setup>
import ResumeCard from "@/pages/resume/ResumeCard.vue";
import { useData } from "@/composables/useData";
import { onMounted } from "vue";
const { companyExprience, jobExprience } = useData();




onMounted(() => {
    fetch('data.json').then((res) => {
        console.log("call res", res)
    }).catch((err) => {
        console.log("call err", err)
    })
})


</script>

<template>
    <div v-motion :initial="{
        opacity: 0,
    }" :enter="{
        opacity: 1,
    }" class="flex flex-col lg:flex-row items-center gap-20 lg:mb-0 mb-12">
        <div class="flex-1">
            <!-- education sectoion start -->
            <div class="py-12 font-titleFont gap-6 flex flex-col">
                <p class="text-sm text-orange-200 tracking-[4px]">2015 - 2022</p>
                <h2 class="capitalize text-gradient2 text-4xl font-bold">Job Exprience</h2>
            </div>

            <div class="mt-14 w-full border-l-[6px] border-l-black h-[800px] border-opacity-30 flex flex-col gap-10">
                <ResumeCard v-for="item in jobExprience" :key="item.title" :eduction="item" />
            </div>
            <!-- eduction section end -->
        </div>

        <div class="flex-1">
            <!-- Job Exprience sectoion start -->
            <div class="py-12 font-titleFont gap-6 flex flex-col">
                <p class="text-sm text-orange-200 tracking-[4px]">2019 - 2022</p>
                <h2 class="capitalize text-gradient2 text-4xl font-bold">Company Exprience</h2>
            </div>

            <div class="mt-14 w-full border-l-[6px] border-l-black h-[800px] border-opacity-30 flex flex-col gap-10">
                <ResumeCard v-for="item in data.companyExprience" :key="item.title" :eduction="item" :isLink="true" />
            </div>
            <!-- Job Exprience section end -->
        </div>
    </div>
</template>
<style></style>
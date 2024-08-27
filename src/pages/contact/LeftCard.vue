
<script setup>
    import Handshek from "@/assets/images/handshek.avif"
    import {useData} from '@/composables/useData.js'
    const {socalMedias, contactData} = useData();
</script>

<template>
   <div class="w-full lg:w-[35%] h-full rounded-xl bg-gradient-to-r shadow-shadowOne from-[#1e2024] to-[#23272b] p-8">
        <img :src="contactData.img" alt="" class="h-72 rounded-lg object-cover">
        <div class="flex flex-col gap-4">
            <h3 class="text-3xl font-bold text-gradient2 mt-2">{{ contactData.name }}</h3>
            <p class="text-base font-semibold">{{ contactData.subTitle }}</p>

            <p class="text-justify">{{ contactData.about }}</p>
            <div>
                <p>Phone : <span>{{ contactData.phone }}</span></p>
                <p>Email: <span>{{ contactData.email }}</span></p>
            </div>
            <div class="mt-4">
                <ul class="flex gap-4">
                    <li class="socalIcon" v-for="socalItem in socalMedias[0].socalMedia" :key="socalItem.name">
                        <a :href="socalItem.link" target="_blank">
                            <Component :is="socalItem.icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>

</style>
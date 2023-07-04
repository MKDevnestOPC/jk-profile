
<script setup>
    import {useData} from '@/composables/useData.js'
    const {logoTrns, socalMedias} = useData();
</script>


<template>
    <div>
        <div>
            <div class="flex items-center gap-1">
            <div class="w-16 h-16">
                    <img :src="logoTrns" alt="" class="w-full h-full object-cover rounded-full p-1 border-2 border-gray-700">
            </div>
                <h2 class="text-2xl uppercase font-bold">Ju<span class="text-designcolor2">g</span>ol</h2>
            </div>
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
</template>

<style>

</style>
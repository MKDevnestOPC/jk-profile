
<script setup>
    import Handshek from "@/assets/images/handshek.avif"
    import {useData} from '@/composables/useData.js'
    const {socalMedias} = useData();
</script>

<template>
   <div class="w-[35%] h-full rounded-xl bg-gradient-to-r shadow-shadowOne from-[#1e2024] to-[#23272b] p-8">
        <img :src="Handshek" alt="" class="h-72 rounded-lg object-cover">
        <div class="flex flex-col gap-4">
            <h3 class="text-3xl font-bold text-gradient2 mt-2">Jugol Kumar</h3>
            <p class="text-base font-semibold">Full Stuck Developer</p>

            <p class="text-justify">HELLO EVERYONE. IM SRI JUGOL KUMAR. AS A WEB-DEVELOPER. I LIKE DEVELOPMENT WEBSITE WITH LARAVEL FREMWORK . USING VUE JS JAVASCRIPT FREMWORK FOR FORNT SIDE.</p>
            <div>
                <p>Phone : <span>+008 01723 717933</span></p>
                <p>Email: <span>Jugolkumar23@gmail.com</span></p>
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
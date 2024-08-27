<script setup>
    import {ref} from 'vue'
    import {useData} from '@/composables/useData.js'

    const {navItems, logoImg, logoTrns} = useData();

    import IconMenu from "@/components/icons/IconMenu.vue";
    import IconClose from "@/components/icons/IconClose.vue";


    const isOpen = ref(false)
    const menuOpen =(val)=>isOpen.value = val

    
</script>

<template>
    <div class="sticky top-0 z-50 w-full h-20 mx-auto flex justify-between items-center bg-bodyColor border-b-[1px] border-b-gray-600 ">
        <div class="flex items-center gap-1">
            <div class="w-10 h-10 lg:w-16 lg:h-16">
                <img :src="logoTrns" alt="" class="w-full h-full object-cover rounded-full p-1 border-2 border-gray-700">
            </div>
            <h2 class="text-xl lg:text-2xl uppercase font-bold text-white">Ju<span class="text-designcolor2 animate-pulse">g</span>ol</h2>
        </div>

        <div class="font-titleFont hidden lg:block">
            <ul class="flex items-center gap-10">
                <li class="navitem text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designcolor2 duration-300" 
                v-for="item in navItems" :key="item.id" v-scroll-to="item.id">
                    <a :href="item.id">{{  item.title }}</a>
                </li>
            </ul>
        </div>

        <div class="lg:hidden">
            <IconClose v-if="isOpen" @click="menuOpen(false)" class="text-white text-2xl"/>
            <IconMenu v-else @click="menuOpen(true)" class="text-white text-2xl"/>
        </div>

        <div v-if="isOpen" class="lg:hidden w-[70vw] bg-white h-screen absolute top-20 right-0">
            <ul class="flex flex-col items-center gap-5 mt-5">
                <li class="navitem text-base font-normal text-bodyColor tracking-wide cursor-pointer hover:text-designcolor2 duration-300" 
                v-for="item in navItems" :key="item.id" v-scroll-to="item.id">
                    <a :href="item.id">{{  item.title }}</a>
                </li>
            </ul>
        </div>

    </div>
</template>
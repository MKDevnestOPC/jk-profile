<script setup>
    import {useData} from '@/composables/useData.js'
    const {navItems} = useData();
</script>

<template>
    <h2 class="text-xl text-gradient2 font-bold font-titleFont">Quick Links</h2>
    <div>
        <ul class="flex flex-col gap-1">
            <li class="group" v-for="item in navItems" :key="item.id"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300:" :href="item.id">{{ item.title }}</a></li>
        </ul>
    </div>
</template>

<style>

</style>
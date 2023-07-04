<script setup>
    defineProps({
        skill:Object,
    })
</script>

<template>
    <div class="overflow-x-hidden">
        <p class="font-medium text-sm uppercase">{{skill.title}}</p>
        <span class="bgOppacity w-full h-2 inline-flex rounded-md">
            <span v-motion
                :initial="{ opacity: 0, x: '-100%' }"
                :enter="{ opacity: 1, x: 0, }"
                :delay="300"
                :style="`width:${skill.skill}`" class="h-full bg-gradient-to-r from-orange-300 to-yellow-300 rounded-md relative">
                <span class="absolute -top-7 right-0">{{ skill.skill }}</span>
            </span>
        </span>
    </div>
</template>
<script setup>
    import IconArrowRight from "./icons/IconArrowRight.vue";
    
    const props = defineProps({
        item:{
            type:Object,
            required:true,
        }
    })
</script>


<template>
    <div class="w-full px-12 py-10 cursor-pointer rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#1e2024] group hover:bg-gradient-to-b hover:to-[#1e2024] hover:from-black transition-colors duration-100 gap-5 h-72 overflow-hidden">
        <div class="flex flex-col gap-6 translate-y-7 group-hover:-translate-y-5 transition-all duration-700">
            <div>
                <component class="text-4xl text-orange-400" :is="props.item.icon"/>
            </div>
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl text-gradient2 font-bold">{{ props.item.title }}</h1>
                <p class="">{{ props.item.desc }}</p>
            
            </div> 
            <div>
                <IconArrowRight class="text-4xl text-orange-400"/>
            </div>
        </div>
    </div>
</template>
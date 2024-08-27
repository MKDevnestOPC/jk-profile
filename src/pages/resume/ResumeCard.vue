<script setup>
    import IconLinkVue from "@/components/icons/IconLink.vue"
    const props = defineProps({
        eduction:{
            type:Object,
            required:true,
        },
        isLink:{
            type:Boolean,
            default:false,
        },
    })
</script>
<template>
    <div class="w-full h-1/3 group flex">
        <div class="w-10 h-[6px] bgOppacity mt-16 relative">
            <span class="absolute w-5 h-5  rounded-full  bg-black bg-opacity-60 -top-2 -left-3 flex justify-center items-center">
                <span class="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-orange-400 transition-all dur3"></span>
            </span>
        </div>
        <div class="w-full h-full bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg duration-300 p-5 lg:p-0 lg:px-10 flex flex-col justify-center gap-5 lg:gap-10 shadow-shadowOne">
            <div class="flex justify-between flex-col gap-3 lg:flex-row lg:gap-0">
                <div class="w-4/5 flex flex-col gap-2">
                    <h1 v-if="isLink" :class="isLink ? 'hover:underline cursor-pointer' : ''" class="text-2xl font-semibold text-gradient2 hover:text-orange-300 duration-1000">
                        <a :href="props.eduction?.link" target="_blank">{{ props.eduction.title }}</a>
                    </h1> 
                    <h1 v-else class="text-2xl font-semibold text-gradient2 hover:text-orange-300 duration-1000">
                        {{ props.eduction.title }}
                    </h1>
                    <p class="text-sm font-medium text-gray-200 font-Poppins">{{ props.eduction.subTitle ?? ''}}</p>
                </div>
                <div>
                    <p class="text-sm w-20 h-10 text-orange-300 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne font-normal">{{ props.eduction.result }}</p>
                </div>
            </div>
            <div>
                <p class="text-xs font-medium text-gray-200 font-Poppins">{{ props.eduction.desc }}</p>
            </div>
        </div>
    </div>
</template>
<style>

</style>
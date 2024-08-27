<script setup>
    import IconGithubVue from "./icons/IconGithub.vue"
    import IconGlobVue from "./icons/IconGlob.vue"
    
    const props = defineProps({
        project:{
            type:Object,
            required:true,
        }
    })
</script>

<template>
    <div class="w-full p-8 cursor-pointer rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 ">
       
        <div class="w-full h-4/5 overflow-hidden rounded-lg  transition-all ">
            <img :src="props.project.image" class="w-full h-60 object-contain group-hover:scale-110 duration-700" alt="">
        </div>
        <div class="flex items-center justify-between mt-3">
            <h2 class="text-2xl font-bold text-gradient2">{{ props.project.title }}</h2>
            <div class="flex items-center gap-1 text-gray-200 text-xl">
                <div class="w-10 h-10 grid place-items-center group-[icon] bg-black rounded-full shadow-shadowOne hover:text-orange-400 transition-all duration-300">
                    <a :href="props.project.gitHub" target="_blank">
                        <IconGithubVue/>
                    </a>
                </div>
                <div class="w-10 h-10 grid place-items-center group bg-black rounded-full shadow-shadowOne hover:text-orange-400 transition-all duration-300">
                    <a :href="props.project.liveLink" target="_blank">
                        <IconGlobVue/>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-4 font-Poppins text-sm text-justify">{{ props.project.desc }}</div>
    </div>
</template>
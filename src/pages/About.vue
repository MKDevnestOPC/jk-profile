<script setup>
    import {useData} from '@/composables/useData.js'
  const {aboutInfo, cvLink, aboutMe, logoTrns, aboutImg } = useData();
</script>

<template>
    <section id="about" class="w-full py-5 lg:py-20  border-b border-gray-600">
        <div class="lg:mt-8">
            <div class="mb-10 text-center">
                <h3 class="capitalize">Explore me</h3>
                <h1 class="text-gradient2 text-4xl font-bold font-titleFont">Some Tolks for myself.</h1>
            </div>

            <div class="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10 md:px-12 w-full lg:max-w-6xl mx-auto">
                <div class="flex items-center justify-center">
                    <div class="lg:w-96 w-11/12 max-w-sm h-full relative aboutImage md:mt-0 mt-6 shadow-shadowOne rounded-xl">
                        <img class="w-full h-[450px] object-cover rounded-xl p-5"
                         :src="aboutImg" alt="">
                    </div>
                </div> 

                <div class="p-2 text-center md:text-left">
                    <div class="text-gray-300 my-5 p-2 lg:p-6 bg-bodyColor shadow-shadowOne rounded-lg">
                        <p class="text-justify text-sm lg:text-lg">
                          {{ aboutMe  }}
                        </p>
                    </div>
                    <div class="grid grid-cols-3 gap-2 lg:gap-7">
                        <div class="flex items-center flex-col bg-boxBg shadow-shadowOne p-3 gap-3 rounded-lg" v-for="item in aboutInfo" :key="item.title">
                            <h4 class="md:text-4xl text-2xl font-bold text-gradient2">
                                {{  item.count }}
                                <span class="text-gradient">+</span>
                            </h4>
                            <span class="md:text-base text-sm md:text-left text-center">{{ item.title }}</span>
                        </div>
                    </div>

                    <a :href="cvLink" target="_blank" class="w-full m-auto">
                        <button class="px-10 py-3 bg-bodyColor rounded-full shadow-shadowOne mt-8">Download Resume</button>
                    </a>
                </div> 
            </div>
        </div>
    </section>
</template>
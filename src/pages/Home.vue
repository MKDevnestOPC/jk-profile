<script setup>
  import {useData} from '@/composables/useData.js'
  const {userData, socalMedias, profile, logoTrns} = useData();


</script>


<template>
  <section id="home" class="w-full flex items-center">
    <div class="w-full flex flex-col-reverse lg:flex-row justify-between self-end border-b border-gray-600 pt-10 lg:pt-20 pb-14">
      <div class="w-full lg:w-1/2 flex flex-col gap-10">
        <div class="flex flex-col gap-2 lg:gap-4">
          <h4 class="text-sm lg:text-lg font-normal font-titleFont">{{ userData.slogan }}</h4>
          <h1 class="text-3xl lg:text-6xl text-white font-bold">Hi I'am <span class="text-gradient2">{{ userData.name }}</span>
          </h1>
          <h2 class="text-xl lg:text-4xl font-semibold">a 
            <vue-typer
                class="text-gradient2"
                :pre-type-delay='150'
                type-delay='100'
                :shuffle='false'
                initial-action='erasing'
                :text=userData.typer></vue-typer>            
          </h2>
          <p class="text-xs lg:text-lg leading-4 lg:leading-6 text-justify font-Poppins">{{ userData.about }}</p>
        </div>


        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-10 font-titleFont">
          <div v-for="item in socalMedias" :key="item.title">
            <h4>{{ item.title }}</h4>
            <div class="mt-4">
              <ul class="flex gap-4">
                <li class="socalIcon" v-for="socalItem in item.socalMedia" :key="socalItem.name">
                  <a :href="socalItem.link" target="_blank">
                    <Component :is="socalItem.icon"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="flex items-center justify-end relative -top-20">
          <img :src="logoTrns" class="w-full lg:w-auto lg:h-auto h-full z-10" alt="">
          <div class="w-full lg:w-9/12 h-[300px] bottom-0 left-auto right-auto bg-gradient-to-r from-[#1e2024] to-[#202327] absolute shadow-shadowOne rounded-md"></div>
        </div>
      </div>
    </div>
  </section>
</template>


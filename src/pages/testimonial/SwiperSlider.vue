<template>
    <swiper
      :cssMode="false"
      :navigation="fadeVisible"
      :pagination="{
        clickable: true,
      }"
      :mousewheel="false"
      :keyboard="true"
      :modules="modules"
    >

    
    
      <swiper-slide v-for="item in testimunialItems" :key="item.title">
        <div class="w-full">
            <div class="w-full h-[500px] flex justify-between">
                <div class="w-[35%] h-full bg-gradient-to-r shadow-shadowOne from-[#1e2024] to-[#23272b] p-8">
                    <img :src="item.image" alt="" class="h-72 rounded-lg object-cover">

                    <div class="flex flex-col gap-4 items-start text-left mt-3">
                        <p class="">{{ item.user.loc }}</p>
                        <div class="flex flex-col gap-1">
                            <h1 class="text-2xl font-medium capitalize text-gradient2">{{ item.user.name }}</h1>
                            <p>{{  item.user.deg }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-[60%] h-full flex flex-col justify-between text-left">
                    <img class="w-[20%]" :src="qutImage" alt="">
                    <div class="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8">
                        <div class="flex items-center justify-between border-b-[2px] border-b-gray-300 border-opacity-25 py-8">
                            <div>
                                <h1 class="text-lg font-bold text-gradient2">{{ item.title }}</h1>
                                <p class="text-sm font-normal">via {{ item.via }} - {{ item.timeLine }}</p>
                            </div>
                            <div class="text-orange-300 text-lg flex items-center gap-1">
                                <IconStarVue v-for="item in item.star" :key="item"/>
                            </div>
                        </div>
                        <div class="py-8 text-justify">
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </swiper-slide>
      
    </swiper>
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
    import { useData } from '@/composables/useData';
    import qutImage from "@/assets/images/quote.png"
    import IconStarVue from '@/components/icons/IconStar.vue';

    export default {
      components: {
        Swiper,
        SwiperSlide,
        IconStarVue,
      },
      setup() {
        const {testimunialItems} = useData();
        return {
          modules: [Navigation, Pagination, Mousewheel, Keyboard],testimunialItems, qutImage
        };
      },
    };
  </script>
<style>
    .swiper-pagination-bullet-active{
        background: orange;
    }    
</style>

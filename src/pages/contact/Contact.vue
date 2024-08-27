
<script setup>
    import {useData} from '@/composables/useData.js'
    import LeftCard from "../contact/LeftCard.vue";
    import RightForm from "../contact/RightForm.vue";
    const {socalMedias} = useData();




</script>

<template>
    <section id="contacts" class="w-full py-20  border-b border-gray-600 text-center">
        <div class="mb-10">
            <h3 class="capitalize">Contact</h3>
            <h1 class="text-gradient2 text-4xl font-bold font-titleFont">Contact With Me.</h1>
        </div>

        
        <div class="w-full">
            <div class="w-full h-auto flex flex-col lg:gap-0 gap-10 lg:flex-row justify-between rounded-xl text-left">
               <LeftCard/>
               <RightForm/>
            </div>
        </div>

    </section>
</template>

<style>

</style>
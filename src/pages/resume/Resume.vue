<script setup> 
import Education from "@/pages/resume/Eductaion.vue";
import Skills from "@/pages/resume/Skills.vue";
import Exprience from "@/pages/resume/Exprience.vue";
import Achievements from "@/pages/resume/Achievements.vue";
import { ref } from "vue";


const setRef=ref('education');
const setItem = (event) => setRef.value = event;

</script>

<template>
    <section id="resume" class="w-full py-20  border-b border-gray-600">
        <div class="mb-10">
            <h3 class="capitalize">resume</h3>
            <h1 class="text-gradient2 text-4xl font-bold font-titleFont">My Life Story.</h1>
        </div>


        <div>
            <ul class="capitalize w-full grid grid-cols-3">
                <li @click="setItem('education')" class="skillItem" :class="setRef === 'education' ? 'border-none shadow-shadowOne' : 'border-none'">Eucation</li>
                <li @click="setItem('skills')" class="skillItem" :class="setRef === 'skills' ? 'border-none shadow-shadowOne' : 'border-none'">Professional skills</li>
                <li @click="setItem('exprience')" class="skillItem" :class="setRef === 'exprience' ? 'border-none shadow-shadowOne' : 'border-none'">experience</li>
                <!-- <li @click="setItem('achivment')" class="skillItem" :class="setRef === 'achivment' ? 'border-none shadow-shadowOne' : 'border-none'">achievement</li> -->
            </ul>
        </div>

        <Education v-if="setRef === 'education'"/>
        <Skills v-if="setRef === 'skills'"/>
        <Exprience v-if="setRef === 'exprience'"/>
        <!-- <Achievements  v-if="setRef === 'achivment'"/> -->


    </section>
</template>



<style>

</style>
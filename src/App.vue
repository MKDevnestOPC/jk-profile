<script setup>
import Navbar from '@/pages/Navbar.vue';
import Home from '@/pages/Home.vue';
import Feature from '@/pages/Feature.vue';
import About from '@/pages/About.vue';
import Projects from '@/pages/Projects.vue';
import Resume from '@/pages/resume/Resume.vue';
import Testimonial from '@/pages/testimonial/Testimonial.vue';
import Contact from '@/pages/contact/Contact.vue';
import Footer from "@/pages/footer/Footer.vue"
</script>

<template> 
 <Navbar class="px-4 max-w-screen-2xl"/>   
<div class="overflow-hidden max-w-screen-2xl h-auto p-2 lg:px-16 mx-auto bg-bodyColor text-lightText">
  <Home/>
  <Feature/>  
  <About/>
  <Projects/>
  <Resume/>
  <Testimonial/>
  <Contact/>
  <Footer/>  
</div>
</template>



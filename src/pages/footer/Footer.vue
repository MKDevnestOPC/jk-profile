<script setup>
    import LogoSection from './LogoSection.vue';
    import QuickLinks from './QuickLinks.vue'
</script>

<template>
    <div class="w-full bg-bodyColor py-20 h-auto grid lg:grid-cols-4 place-items-center gap-10">
        <div class="w-full h-full">
          <LogoSection/>
        </div>
        <div class="w-full h-full flex flex-col gap-6">
            <QuickLinks/>
        </div>
        <div class="w-full h-full flex flex-col gap-6">
            <h2 class="text-xl text-gradient2 font-bold font-titleFont">Resources</h2>
            <div>
                <ul class="flex flex-col gap-1">
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Authentication</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">System Status</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Trams & Condition</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Privacy Policy</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Service Policy</a></li>
                </ul>
            </div>
        </div>
        
        <div class="w-full h-full flex flex-col gap-6">
            <h2 class="text-xl text-gradient2 font-bold font-titleFont">Up Comming</h2>

            <div>
                <ul class="flex flex-col gap-1">
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">About</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Blogs</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Contact</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Service</a></li>
                    
                    <li class="group"><a class="font-semibold font-titleFont group-hover:text-orange-300 group-hover:underline transition-all duration-300" href="javascript:void(0)">Protfolio</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
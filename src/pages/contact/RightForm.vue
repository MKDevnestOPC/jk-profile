<template>
     <div class="w-[60%] h-full flex flex-col justify-between text-left">
        <form @submit.prevent="sendMessage" class="rounded-xl bg-gradient-to-r shadow-shadowOne from-[#1e2024] to-[#23272b] p-8">
            <div class="flex flex-col gap-5">
                <div class="flex justify-between items-center gap-6">
                    <div class="flex flex-col flex-1 gap-2">
                        <label class="uppercase">your Name</label>
                        <input type="text" v-model="formData.name" class="contactInput">
                    </div>
                    <div class="flex flex-col flex-1 gap-2">
                        <label class="uppercase">phone number</label>
                        <input type="number" v-model="formData.phone" class="contactInput">
                    </div>
                </div>
                <div class="flex flex-col flex-1 gap-2">
                    <label class="uppercase">Email Address</label>
                    <input type="email" v-model="formData.email" class="contactInput">
                </div>   
                <div class="flex flex-col flex-1 gap-2">
                    <label class="uppercase">Subject</label>
                    <input type="text" v-model="formData.subject" class="contactInput">
                </div>   
                <div class="flex flex-col flex-1 gap-2">
                    <label class="uppercase">Message</label>
                    <textarea class="contactInput h-56" v-model="formData.message" row="8"></textarea>
                </div>
            </div>
            <button type="submit" class="px-10 py-3 bg-bodyColor rounded-full shadow-shadowOne mt-8">Send Message</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import axios from 'axios';
    const formData = ref({
        name: null,
        phone:null,
        email: null,
        subject:null,
        message: null,
    });

    const sendMessage = () =>{
        axios.post('http://127.0.0.1:8000/test-form', formData.value).then((res) =>{
            console.log(res);
        }).catch((err) =>{
            console.log(err);
        })
    }

</script>

<style>

</style>
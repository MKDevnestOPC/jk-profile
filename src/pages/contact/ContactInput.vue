<template>
  <div class="flex flex-col flex-1 gap-2">
        <label class="uppercase">{{ label }}</label>
        <input :type="type" class="contactInput">
    </div>
</template>

<script setup>
    defineProps({
        label:String,
        type:{
            type:String,
            default:"text"
        }
    })
</script>
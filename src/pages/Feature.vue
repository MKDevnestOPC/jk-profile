<script setup>
    import Card from '@/components/Card.vue';
    import { useData } from '@/composables/useData';

    const {featureItems} = useData();
</script>


<template>
    <section id="feature" class="w-full py-20  border-b border-gray-600">
        <div class="mb-10">
            <h3 class="capitalize">featureds</h3>
            <h1 class="text-gradient2 text-4xl font-bold font-titleFont">What I Do ?</h1>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <Card v-for="item in featureItems" :key="item.title" :item="item"/>
        </div>
    </section>
</template>
<template>
    <div 
        class="h-[60px]">
        <NavigationBar/>
    </div>
    <div
        class="bg-gray-100 h-fit">
        <NuxtPage/>
    </div>
</template>

<script setup>
import 
    NavigationBar 
from '~/components/ui/NavigationBar.vue';


</script>
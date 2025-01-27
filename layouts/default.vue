<template>
    <div 
        class="h-[60px]">
        <NavigationBar/>
    </div>
    <div
        class="bg-gray-100 h-fit">
        <NuxtPage/>
    </div>
    <div 
        class="h-fit">
        <Footer/>
    </div>
</template>

<script setup>
import { 
    NavigationBar, 
    Footer 
} from '~/components/ui';


</script>
<template>
    <div
        class="bg-gray-200 h-fit relative">
        <div 
            class=" w-full absolute top-3 z-30">
            <NavigationBar/>
        </div>
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
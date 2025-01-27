<template>
    <div
        class="bg-gray-100 h-fit relative">
        <div 
            class="h-[60px] w-full absolute top-3 z-30">
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
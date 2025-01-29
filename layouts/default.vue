<template>
    <div
        class="h-fit relative">
        <div 
            class=" w-full fixed top-0 z-30 transition"
            :class="{'-translate-y-full': !isVisible}">
            <NavigationBar/>
        </div>
    </div>
    <div class="w-full">
        <NuxtPage/>
    </div>
    <div 
        class="w-full h-fit">
        <Footer/>
    </div>
</template>

<script setup>
import { 
    NavigationBar, 
    Footer 
} from '~/components/ui';

import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    isVisible.value = currentScrollY < lastScrollY || currentScrollY < 10;
    lastScrollY = currentScrollY;
};

onMounted(() => {
   window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <div
        class="h-fit relative">
        <div 
            class=" w-full fixed top-0 z-30 transition"
            :class="{'-translate-y-full': !isVisible}">
            <NavigationBar/>
        </div>
    </div>
    <div class="w-full relative">
        <NuxtPage/>
        <div class=" fixed bottom-6 right-6">
            <UPopover 
                :popper="{ 
                    offsetDistance: 6, 
                    placement: 'top-end' 
                }">
                <UButton 
                    color="white" 
                    variant="soft"
                    label="Chatbot"
                    icon="svg-spinners:blocks-shuffle-3"
                    class="bg-[#2973B2] text-white rounded-full py-3 px-4"/>
                <template 
                    #panel>
                    <div 
                        class="p-3 w-[400px] h-[600px]">
                        Chatbot
                    </div>
                </template>
            </UPopover>
        </div>
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
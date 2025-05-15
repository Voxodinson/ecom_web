<template>
    <div class="h-fit relative">
        <div 
            class="w-full fixed top-0 z-30 transition duration-300"
            :class="{
                '-translate-y-full': !isVisible,
                'bg-gradient-to-r from-sky-400 to-sky-600': hasGradientBg
            }">
            <NavigationBar/>
        </div>
    </div>
    <div 
        class="w-full relative">
        <NuxtPage/>
        <ULink
            to="/chatbot"
            v-if="$route.path !== '/chatbot'"
            class="w-fit h-fit fixed right-6 bottom-6 z-30 ">
            <div 
                class="w-[60px] h-[60px] rounded-full overflow-hidden">
                <img 
                    :src="BotImage" 
                    alt=""
                    class="w-full h-full hover:scale-110 transition object-cover">
            </div>
        </ULink>
    </div>
    <div 
        class="w-full h-fit"
        :class="hasFooter ? 'hidden' : ''">
        <Footer/>
    </div>
</template>

<script lang="ts" setup>
import { 
    NavigationBar, 
    Footer 
} from '~/components/ui';
import {
    BotImage 
} from '~/assets/images';
import { 
    ref, 
    onMounted, 
    onUnmounted 
} from 'vue';
import { 
    useRoute 
} from 'nuxt/app'


/**
 * Begin::Declare variable section
 */
const route = useRoute();
const isVisible: Ref<boolean> = ref<boolean>(true);
let lastScrollY = 0;
/**
 * End::Declare variable section
 */

/**
 * Begin::Some Logical section
 */
const isScrolled = ref(false)

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isVisible.value = currentScrollY < lastScrollY || currentScrollY < 10
  isScrolled.value = currentScrollY > 10
  lastScrollY = currentScrollY
}


const isTravelsRoute = computed(() => {
    return /^\/travels\/\d+$/.test(route.path);
});
const isProductsRoute = computed(() => {
    return /^\/products\/\d+$/.test(route.path);
});

const hasGradientBg = computed(() =>
    isScrolled.value ||
    ['/cart', '/users/user_profile', '/chatbot'].includes(route.path) ||
    isTravelsRoute.value ||
    isProductsRoute.value
)
const hasFooter = computed(() => 
    ['/users/user_profile', '/chatbot'].includes(route.path)
);

/**
 * End::Some Logical section
 */

onMounted(() => {
   window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <div class="h-fit relative">
        <div 
            class="w-full fixed top-0 z-30 transition duration-300"
            :class="{
                '-translate-y-full': !isVisible,
                'bg-gradient-to-r from-sky-400 to-sky-600': isScrolled || $route.path === '/cart'
            }">
        <NavigationBar/>
    </div>
</div>
    <div 
        class="w-full relative">
        <NuxtPage/>
        <div   
            v-if="route.path != '/cart'"  
            class=" fixed bottom-6 z-30 right-6">
            <UPopover 
                :popper="{ 
                    offsetDistance: 6, 
                    placement: 'top-end' 
                }">
                <div 
                    color="white" 
                    variant="soft"
                    class="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img 
                        :src="BotImage" 
                        alt=""
                        class="w-full h-full hover:scale-110 transition object-cover">
                </div>
                <template 
                    #panel="{ close }">
                    <div 
                        class="w-[550px] h-[650px] relative">
                        <div 
                            class="w-full">
                            <div 
                                class="w-full relative overflow-hidden flex items-center justify-center h-[50px]">
                                <img 
                                    :src="PatternBG" 
                                    alt="image"
                                    class="w-full object-cover">
                                <div 
                                    class="z-30 w-full h-full p-3 absolute top-0 flex items-center justify-between left-0">
                                    <UIcon
                                        v-if="isOpenNewQuestion"
                                        @click="(): void =>{
                                            toggleNewQuestion(false);
                                        }"
                                        name="line-md:chevron-left-circle-twotone"
                                        class="w-6 h-6 text-white cursor-pointer hover:scale-110 transition"/>
                                    <h3
                                        class="text-white font-semibold">
                                        {{ isOpenNewQuestion ? 'New Chat' : 'Recommend & Help Bot' }}
                                    </h3>
                                    <UIcon 
                                        name="meteor-icons:xmark" 
                                        class="w-6 h-6 text-white cursor-pointer hover:scale-110 transition" 
                                        @click="close"/>
                                </div>
                            </div>
                            <div 
                                class="w-full pb-9 overflow-y-auto p-3"
                                :class="userQuestion ? 'h-[calc(650px-105px)]' : 'h-[calc(650px-55px)]'">
                                <div 
                                    v-if="isOpenNewQuestion != true"
                                    class="h-fit flex flex-col gap-2">
                                    <div 
                                        class="w-full flex gap-3">
                                        <div 
                                            class="w-[40px] h-[40px] rounded-full overflow-hidden">
                                            <img 
                                                :src="BotImage" 
                                                alt="image"
                                                class="w-full h-full object-cover">
                                        </div>
                                        <div 
                                            class="w-[80%] bg-white shadow-md p-3 rounded-r-md rounded-b-md  border-[1px] border-gray-200">
                                            <p
                                                class="text-wrap text-[#184e7c]">
                                                {{ question }}
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div
                                        v-if="userQuestion === ''"
                                        class="ml-[50px] w-[80%] flex flex-col gap-2">
                                        <div
                                            v-for="(q, idx) in defaultQuestion"
                                            :key="idx"
                                            @click="(): void => {
                                                    userQuestion = q as string;
                                            }"
                                            class="border-[1px] border-blue-200 hover:border-blue-400 cursor-pointer transition w-fit px-4 py-2 rounded-full group">
                                            <p
                                                class="text-[.8rem] text-blue-400 group-hover:text-blue-600">
                                                {{ q }}
                                            </p>
                                        </div>
                                    </div>
                                    <div 
                                        v-if="userQuestion != ''"
                                        class="w-full flex justify-end gap-3">
                                        <div 
                                            class="w-[80%] bg-gradient-to-r from-blue-500 to-[#07497f]  shadow-md p-3 rounded-l-md rounded-b-md  border-[1px] border-gray-200">
                                            <p
                                                class="text-wrap text-white">
                                                {{ userQuestion }}
                                            </p>
                                        </div>
                                        <div 
                                            class="w-[40px] h-[40px] rounded-full overflow-hidden">
                                            <img 
                                                :src="BotImage" 
                                                alt="image"
                                                class="w-full h-full object-cover">
                                        </div>
                                    </div>
                                    <div
                                        v-for="i in 10"
                                        v-if="userQuestion != ''"
                                        class="w-full flex gap-3">
                                        <div 
                                            class="w-[40px] h-[40px] rounded-full overflow-hidden">
                                            <img 
                                                :src="BotImage" 
                                                alt="image"
                                                class="w-full h-full object-cover">
                                        </div>
                                        <div 
                                            class="w-[80%] bg-white shadow-md p-3 rounded-r-md rounded-b-md  border-[1px] border-gray-200">
                                            <p
                                                class="text-wrap text-[#184e7c]">
                                                {{ returnAnswer }}
                                            </p>
                                        </div> 
                                    </div>
                                </div>
                                <div 
                                    v-if="isOpenNewQuestion"
                                    class="w-full h-fit flex flex-col gap-2">
                                    <div
                                        v-for="(q, idx) in defaultQuestion"
                                        :key="idx"
                                        @click="(): void => {
                                                userQuestion = q as string;
                                                if(userQuestion != ''){
                                                    toggleNewQuestion(false);
                                                }
                                        }"
                                        class="border-[1px] border-blue-200 hover:border-blue-400 cursor-pointer transition w-fit px-4 py-2 rounded-full">
                                        <p 
                                            class="text-[.8rem] text-blue-400 hover:text-blue-600">
                                            {{ q }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div 
                                v-if="userQuestion != ''"
                                class="w-full h-[55px] flex items-center justify-center  bg-gradient-to-r from-blue-500 to-[#07497f]  p-3 border-t-[1px] border-gray-200">
                                <UButton 
                                    color="white" 
                                    variant="solid"
                                    label=""
                                    icon="material-symbols:add-2-rounded"
                                    class="p-3 rounded-full text-[#184e7c] bg-white hover:bg-blue-200"
                                    @click="(): void => {
                                        toggleNewQuestion(true);
                                    }"/>
                            </div>
                        </div>
                    </div>
                </template>
            </UPopover>
        </div>
    </div>
    <div 
        v-if="route.path !== '/cart'"
        class="w-full h-fit">
        <Footer/>
    </div>
</template>

<script lang="ts" setup>
import { 
    NavigationBar, 
    Footer 
} from '~/components/ui';
import { 
    PatternBG, 
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
const isOpenNewQuestion: Ref<boolean> = ref<boolean>(false);
let lastScrollY = 0;
const question: Ref<string> = ref<string>('Welcome to [Your Store Name]! Im here to make your shopping experience smooth and enjoyable. How can I assist you today?');
const defaultQuestion =  [
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "Need help with a return or exchange? I can guide you through the process.",
    "Would you like to review our return policy before making a purchase?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "Need help with a return or exchange? I can guide you through the process.",
    "Would you like to review our return policy before making a purchase?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "Need help with a return or exchange? I can guide you through the process.",
    "Would you like to review our return policy before making a purchase?"
]
const userQuestion: Ref<string> = ref<string>('');
const returnAnswer: Ref<string> = ref<string>('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eveniet quia voluptas quam unde fuga consequatur, eius commodi tempora quisquam cumque accusantium cupiditate doloremque consectetur vitae iure nulla debitis ab!');
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

const toggleNewQuestion = (value: boolean): void => {
    isOpenNewQuestion.value = value as boolean;
}
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
<template>
    <div 
        class="w-full h-fit flex items-center justify-center ">
        <div 
            class="w-[60%] h-fit bg-gray-100 mt-[55px]">
            <div 
                class="w-full pb-9 p-3">
                <div 
                    v-if="isOpenNewQuestion != true"
                    class="min-h-[calc(100vh-105px)] h-fit flex flex-col gap-2">
                    <div
                        class="ml-[50px] w-[80%] flex flex-col gap-3">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    colorMode: 'light'
});

import {
    BotImage 
} from '~/assets/images';
/**
 * Begin::Declare variable section
 */
const isOpenNewQuestion: Ref<boolean> = ref<boolean>(false);
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
const toggleNewQuestion = (value: boolean): void => {
    isOpenNewQuestion.value = value as boolean;
}

</script>

<style lang="scss" scoped>

</style>
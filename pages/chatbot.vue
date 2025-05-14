<template>
    <div 
        class="w-full flex justify-center mt-[55px] h-[calc(100vh-55px)] items-start">
        <div 
            class="w-[60%] bg-gray-100">
            <div 
                v-if="isOpenNewQuestion"
                class="h-fit flex flex-col gap-2">
                <div
                    class="ml-3 w-[80%] flex flex-col gap-3">
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
            <div 
                class="w-full h-fit sticky bottom-0 left-0 p-3">
                <div 
                    class="w-full h-fit rounded-[16px] bg-white p-3 z-30 border-gray-200 border-[1px]">
                    <UTextarea 
                        color="white" 
                        placeholder="Ask Anything"
                        name="address"
                        role="input"
                        autoresize
                        size="lg"
                        :padded="false"
                        variant="none"
                        class="bg-none max-h-[150px] overflow-auto text-black"/>
                    <div 
                        class="w-full rounded-full mt-1 flex justify-between items-center">
                        <UButton
                            type="submit"
                            color="blue"
                            variant="solid"
                            size="lg"
                            @click="() => {
                                toggleNewQuestion(Boolean(true));
                            }"
                            icon="material-symbols:add-2-rounded"
                            class="rounded-xl p-3"
                            square/>
                        <UButton
                            type="submit"
                            color="blue"
                            variant="solid"
                            size="lg"
                            icon="mynaui:send"
                            class="rounded-xl p-3"
                            square/>
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
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?"
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
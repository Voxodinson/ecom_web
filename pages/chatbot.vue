<template>
    <div 
        class="w-fit flex items-center sticky top-[10vh] left-12 gap-2">
        <div 
            class="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img 
                :src="BotImage" 
                alt=""
                class="w-full h-full hover:scale-110 transition object-cover">
        </div>
        <h3
            class="text-center text-[1rem] font-semibold">
            Chatbot
        </h3>
    </div>
    <div 
        class="w-full flex justify-center flex-col items-center">
        <div 
            class="w-[60%] min-h-[75vh] max-h-fit pt-12"
            :class="isOpenNewQuestion || getUserQuestion != '' ? 'bg-gray-100' : ''">
            <div 
                v-if="!isOpenNewQuestion && !getUserQuestion"
                class="flex items-center justify-center h-[30vh] mt-[20vh]">
                <h3
                    class="text-center text-[1.2rem] font-medium">
                    👋 Hey there! What can I do for you?
                </h3>
            </div>
            <div class="w-full flex items-center justify-end px-3">
                <p
                    class="px-4 py-2 max-w-[70%] rounded-[16px] bg-white">
                    {{ getUserQuestion }}
                </p>
            </div>
        </div>
    </div>
    <div 
        class="w-full h-fit flex flex-col bg-white items-center justify-center sticky bottom-0 left-0">
        <div 
            class="w-[60%] h-fit rounded-b-[16px] bg-white shadow-sm p-3 z-30 border-gray-200 border-[1px]">
            <UTextarea 
                color="white" 
                placeholder="Ask Anything"
                name="address"
                role="input"
                autoresize
                size="lg"
                :padded="false"
                variant="none"
                v-model="getUserInputQuestion"
                class="bg-none max-h-[150px] overflow-auto text-black"/>
            <div 
                class="w-full rounded-full mt-1 flex justify-between items-center">
                <UButton
                    type="submit"
                    color="blue"
                    variant="solid"
                    size="sm"
                    label="Open Existing Question"
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
                    size="sm"@click="() => {
                        if(getUserInputQuestion){
                            getUserQuestion = String(getUserInputQuestion);
                            getUserInputQuestion = String('');
                        }
                    }"
                    icon="mynaui:send"
                    class="rounded-xl p-3"
                    square/>
            </div>
        </div>
        <div 
            class="mt-2 ">
            <p
                class="font-thin text-[.8rem] text-gray-400">
                Chatbot can make mistake! Please double check respones.
            </p>
        </div>
    </div>
    <UModal 
        v-model="isOpenNewQuestion"
        :ui="{
            width: 'w-[60%] sm:max-w-1/2 max-h-[90vh]',
        }">
        <div 
            class="h-full w-full overflow-auto flex flex-col items-center gap-3">
            <div class="w-full h-[50px] flex p-2 justify-between items-center border-b-[1px] border-gray-200">
                <h3
                    class=" capitalize font-semibold">
                    Pick a existing created question
                </h3>
                <UIcon
                    name="material-symbols:close-rounded"
                    class="w-7 h-7 text-black font-thin hover:scale-110 transition cursor-pointer"
                    @click="() => {
                        toggleNewQuestion(Boolean(false));
                    }"/>
            </div>
            <div
                class="h-full w-full flex flex-col gap-3 p-3">
                <div
                    v-for="(q, idx) in defaultQuestion"
                    :key="idx"
                    @click="(): void => {
                        getUserQuestion = q as string;
                        toggleNewQuestion(Boolean(false));
                    }"
                    class="border-[1px] border-blue-200 hover:border-blue-400 cursor-pointer transition w-fit px-4 py-2 rounded-full group">
                    <p
                        class="text-[.8rem] text-blue-400 group-hover:text-blue-600">
                        {{ q }}
                    </p>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script setup lang="ts">
import { 
    BotImage 
} from '~/assets/images';


definePageMeta({
    colorMode: 'light'
});
/**
 * Begin::Declare variable section
 */
const isOpenNewQuestion: Ref<boolean> = ref<boolean>(false);
const defaultQuestion =  [
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
     "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?", "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?", "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?" ,"What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?",
    "Are you shopping for yourself or looking for a gift?",
    "Do you have a preferred brand, color, or size?",
    "What type of products are you interested in today?"
]
const getUserInputQuestion: Ref<string> = ref<string>('');
const getUserQuestion: Ref<string> = ref<string>('What type of products are you interested in today?What type of products are you interested in today?What type of products are you interested in today?What type of products are you interested in today?What type of products are you interested in today?What type of products are you interested in today?What type of products are you interested in today?');
/**
 * End::Declare variable section
 */
const toggleNewQuestion = (value: boolean): void => {
    isOpenNewQuestion.value = value as boolean;
}

</script>

<style lang="scss" scoped>

</style>
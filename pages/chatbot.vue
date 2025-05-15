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
        class="w-full pb-[200px] flex justify-center flex-col items-center">
        <div 
            class="w-[60%] max-h-fit pt-12">
            <div 
                v-if="!isOpenNewQuestion && !getUserQuestion"
                class="flex items-center justify-center flex-col h-fit mt-[20vh]">
                <h3
                    class="text-center text-[1.5rem] font-medium">
                    👋 Hey there! What can I do for you?
                </h3>
                <p
                    class="font-thin text-[.8rem] text-gray-400 text-center mt-3">
                    Choosin existing question below or write your own to start <br> chatting with our 
                    <span
                        class="text-black font-medium">
                        ChatBot!
                    </span>
                </p>
                <div 
                    class="w-full grid grid-cols-2 gap-3 mt-12">
                    <div
                        v-for="(q, idx) in fourDefaultQuestion"
                        :key="idx"
                        @click="(): void => {
                            getUserQuestion = q as string;
                            toggleNewQuestion(Boolean(false));
                        }"
                        class="border-[1px] items-center flex justify-start border-blue-200 hover:border-blue-400 cursor-pointer transition w-full px-4 py-2 rounded-full group">
                        <p
                            class="text-[.8rem] text-blue-400 group-hover:text-blue-600">
                            {{ q }}
                        </p>
                    </div>
                </div>
                <div class="w-full mt-3">
                    <UButton
                        icon="material-symbols:unfold-more-rounded"
                        variant="soft"
                        color="white"
                        label="See more"
                        size="sm"
                        @click="() => {
                            toggleNewQuestion(Boolean(true));
                        }"
                        class="text-gray-400 hover:text-black transition"/>
                </div>
            </div>
            <div
                v-if="getUserQuestion" 
                class="w-full flex flex-col items-end justify-start gap-3 pb-6 px-3">
                <p
                    class="px-4 py-2 max-w-[70%] border-[1px] border-gray-200 rounded-[16px] bg-white">
                    {{ getUserQuestion }}
                </p>
            </div>
        </div>
    </div>
    <div 
        class="w-full h-fit flex flex-col bg-white items-center justify-center fixed bottom-0 pb-3 left-0">
        <div 
            class="w-[60%] h-fit rounded-[16px] bg-white shadow-sm p-3 z-30 border-gray-200 border-[1px]">
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
            width: 'w-[60%] sm:max-w-1/2',
        }">
        <div 
            class="h-full w-full overflow-auto flex flex-col items-center gap-3">
            <div 
                class="w-full h-[50px] flex p-2 justify-between items-center border-b-[1px] border-gray-200">
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
                class="h-[60vh] overflow-y-auto w-full flex flex-col gap-3 p-3">
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
const defaultQuestion: any =  [
    "Looking for something specific?",
    "Need help with sizing or product details?",
    "Having trouble with your cart or checkout?",
    "Can I speak with a human agent?",
    "What type of products are you interested in today?"
];
const fourDefaultQuestion = [...defaultQuestion].splice(0, 4);
const getUserInputQuestion: Ref<string> = ref<string>('');
const getUserQuestion: Ref<string> = ref<string>('');
/**
 * End::Declare variable section
 */
const toggleNewQuestion = (value: boolean): void => {
    isOpenNewQuestion.value = value as boolean;
}

</script>

<style lang="scss" scoped>

</style>
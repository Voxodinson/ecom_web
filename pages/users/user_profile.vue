<template>
    <div
        class="w-full flex items-start mt-[50px] justify-center">
        <div 
            class="w-[60%] h-[200vh] bg-gray-100">
            <div 
                class="relative h-[30vh] w-full  bg-gray-300">
                <div 
                    class="w-full flex justify-between px-6 items-end absolute bottom-[-50px]">
                    <div 
                        class="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-white">
                        <img 
                            :src="UserImage" 
                            alt="user profile"
                            class="w-full h-full object-cover">
                    </div>
                    <UButton
                        color="white"
                        variant="soft"
                        class="bg-gradient-to-r from-sky-400 to-sky-600 hover:to-sky-400 h-fit px-6 py-2 font-semibold text-white rounded-full capitalize"
                        label="Set up profile"/>
                </div>
            </div>
            <div 
                class="w-full mt-[60px] px-6 border-b-[1px] border-gray-300 pb-6">
                <h3
                    class="font-semibold text-[1.3rem]">
                    Vox Odinson
                </h3>
                <span
                    class="text-gray-400 text text-[1.1rem]">
                    @voxodinson
                </span>
                <p
                    class="text-gray-400 text block">
                    Love to travel and shared something new!!! 
                </p>
                <div class="flex items-center gap-2 mt-6">
                    <UIcon
                        class="h-6 w-6 text-green-500"
                        name="material-symbols:list-alt-check-outline-rounded"/>
                    <span
                        class="text-gray-400 text">
                        Joined 10-05-2025
                    </span>
                </div>
                <div class="flex items-center gap-2 mt-1">
                    <UIcon
                        class="h-6 w-6 text-purple-400"
                        name="ant-design:cloud-upload-outlined"/>
                    <span
                        class="text-gray-400 text">
                        Community Post: 1000
                    </span>
                </div>
            </div>
            <div class="w-full">
                <UTabs 
                    :items="tabs" 
                    v-model="selected"
                    class="w-full p-1"/>
                <template
                    v-if="selected === 0">
                    <div 
                        class="w-full px-3">
                        
                    </div>
                </template>
                <template
                    v-if="selected === 1">
                    <div class="w-full px-3">
                        
                    </div>
                </template>
                <template
                    v-if="selected === 1">
                    <div class="w-full px-3">
                        
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    UserImage 
} from '~/assets/images';
definePageMeta({
    colorMode: 'light'
});

/**
 * Begin::Declare variable section
 */
const selected: Ref<number> = ref<number>(0);
const tabs: Ref<any[]> = computed(() => [
    {
        label: 'Community Post'
    },
    {
        label: "Share"
    },
    {
        label: "Like"
    }
]);
/**
 * End:Declare variable section
 */
</script>

<style lang="scss" scoped>

</style>
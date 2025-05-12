<template>
    <div class="w-full h-fit grid grid-cols-[25%_25%_50%]">
        <div 
            class="w-full h-[100vh] border-r-[1px] border-gray-200 shadow-sm">
            <div 
                class="w-full h-[60px] flex justify-between items-center p-3 border-b-[1px] border-gray-200 bg-gradient-to-r from-sky-400 to-sky-600">
                <UButton
                    @click.prevent="$router.back()"
                    variant="soft"
                    color="white"
                    class="group text-[1rem] text-white hover:underline cursor-pointer">
                    <UIcon  
                        name="material-symbols-light:arrow-back-ios-new-rounded"
                        class="w-5 h-5  group-hover:-translate-x-2 transition">
                    </UIcon>
                    Back
                </UButton>
                <h1
                    class="font-semibold text-white flex items-center gap-2">
                    <UIcon
                        name="material-symbols:settings-outline-rounded"
                        class="w-5 h-5"/>
                    Settings
                </h1>
            </div>
            <div class="w-full p-3">
                <UTabs 
                    :items="tabs" 
                    v-model="selectedTab"
                    orientation="vertical"
                    class="w-full mb-12 items-start"
                    :ui="{
                        list: {
                            base: 'flex flex-col items-start',
                            tab: {
                                base: 'justify-start text-left w-full px-4 py-4'
                            }
                        }
                    }"/>
            </div>
        </div>
        <div 
            class="w-full border-r-[1px] border-gray-200">
            <div 
                class="w-full p-3 h-[60px] flex items-center border-b-[1px] border-gray-200">
                <h1
                    class="font-semibold flex items-center gap-2">
                    <UIcon
                        name="material-symbols:settings-outline-rounded"
                        class="w-5 h-5"/>
                    Settings
                </h1>
            </div>
        </div>
        <div 
            class="w-full h-fit">
            <NuxtPage/>
        </div>
    </div>
</template>
<script setup lang="ts">

const selectedTab: Ref<number> = ref<number>(0);

const tabs: Ref<any[]> = computed(() => [
    {
        label: 'Your Account',
        icon: 'material-symbols:account-circle-full'
    },
    {
        label: "Help Center",
        icon: 'ant-design:warning-twotone'
    }
]);
</script>
<template>
    <div class="w-full h-fit grid grid-cols-[25%_25%_50%] bg-gray-100">
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
                    :items="tabSetting" 
                    v-model="selectedTabSetting"
                    orientation="vertical"
                    class="w-full mb-12 items-start"
                    :ui="{
                        list: {
                            base: 'flex flex-col items-start',
                            tab: {
                                base: 'justify-start text-left w-full px-4 py-4 h-[40px]'
                            }
                        }
                    }"/>
            </div>
        </div>
        <template
                v-if="selectedTabSetting === 0">
            <div 
                class="w-full border-r-[1px] border-gray-200">
                <div 
                    class="w-full p-3 h-[60px] flex items-center border-b-[1px] border-gray-200">
                    <h1
                        class="font-semibold flex items-center gap-2">
                        <UIcon
                            :name="tabSetting[selectedTabSetting].icon"
                            class="w-5 h-5"/>
                        {{ tabSetting[selectedTabSetting].label }}
                    </h1>
                </div>
                <div 
                    class="w-full">
                    <template
                        v-if="selectedTabSetting === 0">
                        <div 
                            class="w-full p-3">
                            <UTabs 
                                :items="tabYourAccount" 
                                v-model="selectedTabYourAccount"
                                orientation="vertical"
                                :ui="{
                                    list: {
                                        base: 'flex flex-col items-start',
                                        tab: {
                                            base: 'justify-start text-left w-full px-4 py-4 h-[40px]'
                                        }
                                    }
                                }"/>
                        </div>
                    </template>
                </div>
            </div>
            <div 
                class="w-full h-fit">
                <template
                    v-if="selectedTabYourAccount === 0">
                    <div class="w-full">
                        <AccountInformation/>
                    </div>
                </template>
                <template
                    v-if="selectedTabYourAccount === 1">
                    <div class="w-full">
                        <ResetPassword/>
                    </div>
                </template>
            </div>
       
        </template>
    </div>
</template>
<script setup lang="ts">
import AccountInformation from './account_information.vue';
import ResetPassword from './reset_password.vue';
definePageMeta({
    layout: 'setting',
    colorMode: 'light'
});
const selectedTabSetting: Ref<number> = ref<number>(0);
const selectedTabYourAccount: Ref<number> = ref<number>(0);

const tabSetting: Ref<any[]> = computed(() => [
    {
        label: 'Your Account',
        icon: 'material-symbols:account-circle-full'
    },
    {
        label: "Help Center",
        icon: 'ant-design:warning-twotone'
    }
]);

const tabYourAccount: Ref<any[]> = computed(() => [
    {
        label: 'Account Information',
        icon: 'material-symbols:account-circle-full'
    },
    {
        label: "Change Your Password",
        icon: 'hugeicons:reset-password'
    }
]);


</script>
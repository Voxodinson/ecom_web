<template>
    <div class="w-full h-fit grid grid-cols-[30%_70%]">
        <div 
            class="w-full h-[100vh] sticky top-0 border-r-[1px] border-gray-200 shadow-md">
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
                <div 
                    class="w-full h-fit">
                    <ul class="flex flex-col gap-1">
                        <li
                            class="w-full py-2 mb-3 border-b-[1px] border-gray-200 flex gap-2 items-center">
                            <UIcon
                                name="material-symbols:account-circle-full"
                                class="w-5 h-5"/>
                            <h3
                                class=" truncate">
                                Your Account
                            </h3>
                        </li>
                        <li
                            v-for="(item, idx) in linkItemsAccountInfo"
                            class=" relative">
                            <ULink
                                :key="idx"
                                :to="item.to"
                                active-class="text-blue-500"
                                class="flex items-center gap-3  px-4 rounded-md bg-white text-black py-2 "
                                inactive-class="hover:text-blue-300 font-normal hover:bg-white transition">
                                <UIcon
                                    :name="item.icon"
                                    class="w-6 h-6"/>
                                <span class="truncate">
                                    {{ item.label }}
                                </span>
                            </ULink>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 absolute top-2.5 right-3 ms-auto transform transition-transform duration-200"/>
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-1 mt-3">
                        <li
                            class="w-full py-2 border-b-[1px] mb-3 border-gray-200 flex gap-2 items-center">
                            <UIcon
                                name="material-symbols:help-outline"
                                class="w-5 h-5"/>
                            <h3
                                class=" truncate">
                                Help Center
                            </h3>
                        </li>
                        <li
                            v-for="(item, idx) in linkItemsHelpCenter"
                            class=" relative">
                            <ULink
                                :key="idx"
                                :to="item.to"
                                active-class="text-blue-500"
                                class="flex items-center gap-3  px-4 rounded-md bg-white text-black py-2 "
                                inactive-class="hover:text-blue-300 font-normal hover:bg-white transition">
                                <UIcon
                                    :name="item.icon"
                                    class="w-6 h-6"/>
                                <span class="truncate">
                                    {{ item.label }}
                                </span>
                            </ULink>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 absolute top-2.5 right-3 ms-auto transform transition-transform duration-200"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full h-fit">
            <NuxtPage/>
        </div>
    </div>
</template>
<script setup lang="ts">


const linkItemsAccountInfo = [
    {
        to: '/settings/account_information',
        label: 'Account Information',
        icon: 'material-symbols:article-person-outline-rounded'
    },
    {
        to: '/settings/change_password',
        label: 'Change Your Password',
        icon: 'mage:exchange-a'
    }
];
const linkItemsHelpCenter = [
    {
        to: '/settings/help_center',
        label: 'Help Center',
        icon: 'material-symbols:help-outline'
    }
];
</script>
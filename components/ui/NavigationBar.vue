<template>
    <div
        class="w-full h-fit flex items-center justify-center">
        <div class="w-full h-[55px] pr-3 bg-opacity-80 flex items-center justify-between">
            <div class="w-[150px] h-[150px]">
                <img 
                    :src="Logo" 
                    alt="website logo"
                    class="w-full object-cover rounded-full">
            </div>
            <div class="hidden lg:flex">
                <ul class="flex gap-3">
                    <li
                        v-for="(item, idx) in linkItems">
                        <ULink
                            :key="idx"
                            :to="item.to"
                            active-class="bg-white bg-black text-black py-2 px-4 rounded-full "
                            class="text-[.9rem] uppercase "
                            inactive-class="text-white hover:text-blue-300 font-normal py-2 px-4 rounded-full hover:bg-white transition">
                            {{ item.label }}
                        </ULink>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-fit relative hidden lg:flex">
                    <UButtonGroup 
                        size="md" 
                        orientation="horizontal"
                        class=" rounded-full overflow-hidden">
                        <UInput
                            icon="i-heroicons-magnifying-glass-20-solid"
                            size="sm"
                            color="white"
                            :trailing="false"
                            variant="none"
                            placeholder="Search..."
                            :padded="false"
                            class="bg-gray-50 text-black rounded-l-md text-[.8rem] w-[250px] overflow-hidden py-1.5"/>
                            <UButton
                                color="white"
                                class="px-3 group border-none outline-none bg-white"
                                variant="soft"
                                :padded="false"
                                @click="() => {
                                    toggleSearch();
                                }">
                                <UIcon
                                    :name="openSearchHistory ? 'meteor-icons:xmark' : 'i-heroicons-magnifying-glass-20-solid'"
                                    class="group-hover:scale-110 text-gray-500 hover:text-black transition text-[1.2rem]"/>
                            </UButton>
                    </UButtonGroup>
                    <div 
                        v-if="openSearchHistory"
                        class="w-full absolute bg-white p-2 top-[110%] rounded-md shadow-md">
                        search history
                    </div>
                </div>
                <div 
                    class="w-fit">
                    <UChip
                        size="2xl"
                        text="9">
                        <ULink
                            to="/cart"
                            active-class="text-black"
                            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                            <UButton 
                                icon="material-symbols:shopping-cart-outline" 
                                color="gray"/>
                        </ULink>
                    </UChip>
                </div>
                <UDropdown
                    class="lg:hidden flex"
                    :items="itemsLinkDropdown"
                    :popper="{ arrow: true }">
                    <template #account="{ item }">
                        <ULink
                            :to="item.to"
                            active-class="text-black"
                            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                            {{ item.label }}
                        </ULink>
                    </template>
                    <UButton
                        color="white"
                        size="sm"
                        icon="iconamoon:menu-burger-horizontal-fill"
                        class="border-none"/>    
                </UDropdown>
                <UDropdown
                    class="flex"
                    :items="userItems"
                    :popper="{ arrow: true}">
                    <template #account="{ item }">
                        <ULink
                            :to="item.to"
                            active-class="text-black"
                            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                            {{ item.label }}
                        </ULink>
                    </template>
                    <div
                        class="w-[33px] h-[33px] overflow-hidden rounded-full shadow-sm">
                        <img 
                            :src="UserImage" 
                            alt=""
                            class="w-full h-full object-cover">
                    </div>
                </UDropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    Logo,
    UserImage
} from '~/assets/images';

/**
 * Begin::Declare some variable section
 */
const openSearchHistory: Ref<boolean> = ref<boolean>(false)
const linkItems = [
    {
        to: '/',
        label: 'Home',
        icon: 'i-heroicons-arrow-left-on-rectangle'
    },
    {
        to: '/products/product',
        label: 'Shop',
        icon: 'i-heroicons-arrow-left-on-rectangle'
    },
    {
        to: '/travels/travel',
        label: 'Travel',
        icon: 'i-heroicons-arrow-left-on-rectangle'
    },
    {
        to: '/about',
        label: 'About',
        icon: 'i-heroicons-arrow-left-on-rectangle'
    },
];
const itemsLinkDropdown = [
    [
        {
            label: 'Home',
            to: '',
            icon: 'ant-design:home-outlined'
        }
    ], 
    [
        {
            label: 'Shop',
            icon: 'solar:shop-minimalistic-linear',
            to: '',
        },
        {
            label: 'Categories',
            icon: 'line-md:chevron-left-circle-twotone',
            to: '',
        }
    ], 
    [
        {
            label: 'About',
            icon: 'ix:about',
            to: '',
        }
    ]
];
const userItems = [
    [
        {
            label: 'ben@example.com',
            slot: 'account',
            disabled: true
        }
    ], 
    [
        {
            label: 'User Profile',
            icon: 'i-heroicons-cog-8-tooth'
        },
        {
            label: 'Favorites',
            icon: 'material-symbols:favorite-outline',
            to: '/login'
        }
    ], 
    [
        {
            label: 'Sign In',
            icon: 'si:sign-in-duotone',
            to: '/login'
        }
    ]
];
/**
 * End::Declare some variable section
 */

/**
 * Begin::Some logical section
 */
const toggleSearch = (): void => {
    openSearchHistory.value = !openSearchHistory.value as boolean;
}
/**
 * End::Some logical section
 */
</script>
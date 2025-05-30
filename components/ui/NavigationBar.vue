<template>
    <div
        class="w-full h-fit flex items-center justify-center">
        <div class="w-full h-[70px] px-6 bg-opacity-80 flex items-center justify-between">
            <div class="w-fit">
                <img 
                    :src="Logo" 
                    alt="logo"
                    class="w-[200px]">
            </div>
            <div class="hidden lg:flex">
                <ul class="flex gap-3">
                    <li
                        v-for="(item, idx) in linkItems"
                        class="w-fit h-fit">
                        <ULink
                            :key="idx"
                            :to="item.to"
                            active-class="bg-white bg-black text-black py-2 px-4 rounded-full "
                            class="text-[.9rem] capitalize flex items-center gap-1 "
                            inactive-class="text-white hover:text-blue-300 font-normal py-2 px-4 rounded-full hover:bg-white transition">
                            <UIcon
                                :name="item.icon"
                                class="w-5 h-5"/>
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
                            type="text"
                            icon="i-heroicons-magnifying-glass-20-solid"
                            size="sm"
                            color="white"
                            variant="none"
                            placeholder="Search..."
                            class="bg-gray-50 text-black rounded-l-md text-[.8rem] w-[250px] overflow-hidden"
                            @click="toggleSearchModal(Boolean(true))"/>
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
    <SearchModal
        @toggle="toggleSearchModal"
        :open="isOpenSearchModal"/>
</template>

<script setup lang="ts">
import { 
    SearchModal 
} from '~/collector/modal';
import { 
    Logo,
    UserImage
} from '~/assets/images';

/**
 * Begin::Declare some variable section
 */
const isOpenSearchModal: Ref<boolean> = ref<boolean>(false);
const openSearchHistory: Ref<boolean> = ref<boolean>(false)
const linkItems = [
    {
        to: '/',
        label: 'Home',
        icon: 'material-symbols:home-outline-rounded'
    },
    {
        to: '/travels/travel',
        label: 'Travel',
        icon: 'ic:round-travel-explore'
    },
    {
        to: '/travels/user_post',
        label: 'Share',
        icon: 'material-symbols:add-location-alt-outline-rounded'
    },
    {
        to: '/about',
        label: 'About',
        icon: 'ix:about'
    }
];
const itemsLinkDropdown = [
    [
        {
            label: 'Home',
            to: '/',
            icon: 'material-symbols:home'
        }
    ], 
    [
        {
            label: 'Shop',
            icon: 'material-symbols:shopping-bag-outline',
            to: '/products/product',
        },
        {
            label: 'Travel',
            icon: 'ic:round-travel-explore',
            to: '/travels/travel',
        }
    ], 
    [
        {
            label: 'About',
            icon: 'ix:about',
            to: '/about',
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
            icon: 'material-symbols:account-circle-full',
            to: '/users/user_profile'
        },
        {
            label: 'Favorites',
            icon: 'material-symbols:favorite-outline',
            to: '/login'
        }
    ], 
    [
        {
            label: 'Setting',
            icon: 'material-symbols:settings-outline-rounded',
            to: '/settings/account_information'
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
const toggleSearchModal = (value: boolean): void => {
    isOpenSearchModal.value = value;
}
/**
 * End::Some logical section
 */
</script>
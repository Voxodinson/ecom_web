<template>
    <div
        class="w-full flex flex-col p-3">
        <UTabs 
            :items="tabs" 
            v-model="selected"
            class="w-full mb-3"/>
        <template v-if="selected === 0">
            <div 
                class="flex justify-between items-center w-full p-3 border-[1px] bg-white border-gray-200 rounded-md ">
                <div 
                    class="flex gap-3 items-center justify-center ">
                    <div 
                        class="w-[120px] h-[120px] rounded-full overflow-hidden border-[1px] border-gray-200">
                        <img 
                            :src="UserImage" 
                            alt="user profile"
                            class="w-full h-full object-cover">
                    </div>
                    <div 
                        class="flex flex-col">
                        <h3
                            class=" truncate text-[1.3rem]">
                            Vox Odinson
                        </h3>
                        <span
                            class="text-gray-400 text font-thin text-[.9rem]">
                            @voxodinson
                        </span>
                        <span
                            class="text-gray-400 font-thin text text-[.9rem] mt-3">
                            Like to share somethin new!!!
                        </span>
                    </div>
                </div>
                <div 
                    class="flex gap-3">
                    <UButton
                        icon="material-symbols:edit-square-outline"
                        label="Edit Profile"
                        variant="soft"
                        color="white"
                        class="border-[1px] border-blue-400 text-blue-400"/>
                </div>
            </div>
            <div 
                class="w-full p-3 mt-3 border-[1px] bg-white border-gray-200 rounded-md ">
                <div 
                    class="flex items-center justify-between border-b-[1px] border-gray-200 pb-3">
                    <h3
                        class=" truncate">
                        Personal Information
                    </h3>
                </div>
                <div 
                    class="w-full grid grid-cols-2">
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Firstname
                        </span>
                        <span
                            class="text text-[1rem]">
                            Vox
                        </span>
                    </div>
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Lastname
                        </span>
                        <span
                            class="text text-[1rem]">
                            Odinson
                        </span>
                    </div>
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Username
                        </span>
                        <span
                            class="text text-[1rem]">
                            @voxodinson
                        </span>
                    </div>
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Email
                        </span>
                        <span
                            class="text text-[1rem]">
                            voxodinson@gmail.com
                        </span>
                    </div>
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Phone
                        </span>
                        <span
                            class="text text-[1rem]">
                            +855 67961719
                        </span>
                    </div>
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Bio
                        </span>
                        <span
                            class="text text-[1rem]">
                            Like to share something new!!!!
                        </span>
                    </div>
                    <div 
                        class="w-full flex flex-col py-3 justify-center">
                        <span
                            class="text-gray-400 leading-3 font-thin text text-[.9rem]">
                            Address
                        </span>
                        <span
                            class="text text-[1rem]">
                            Phnom Penh, Cambodia
                        </span>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="selected === 1">
            <Privacy/>
        </template>
    </div>
</template>

<script setup lang="ts">
import Privacy from './privacy.vue';
import { 
    UserImage 
} from '~/assets/images';
definePageMeta({
    layout: 'setting',
    colorMode: 'light'
});

const selected: Ref<number> = ref<number>(0);
const tabs: Ref<any[]> = computed(() => [
    {
        label: 'Information'
    },
    {
        label: "Security"
    }
]);
</script>

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
                        @click="() => {
                            openEditModal(Boolean(true));
                        }"
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
    <UModal 
        v-model="openModalEditeProfile"
        :ui="{
            width: 'w-[60%] sm:max-w-1/2 max-h-[90vh]',
        }">
        <div 
            class="w-full h-full overflow-auto bg-white rounded-md ">
            <div class="w-full h-[50px] flex p-2 justify-between items-center border-b-[1px] border-gray-200">
                <h3
                    class=" capitalize font-semibold">
                    Modify Information
                </h3>
                <UIcon
                    name="material-symbols:close-rounded"
                    class="w-7 h-7 text-black font-thin hover:scale-110 transition cursor-pointer"
                    @click="() => {
                        openEditModal(Boolean(false));
                    }"/>
            </div>
             <form
                name="signin"
                method="POST"
                enctype="multipart/form-data"
                class="w-full p-3"
                @submit.prevent="">
                <h3
                    class="pb-3 font-semibold">
                    Profile
                </h3>
                <div 
                    class="w-[170px] h-[170px] bg-gray-100 border-[2px] overflow-hidden border-blue-200 border-dashed rounded-md">
                    <ChoosePhoto
                        name="photo"/>
                </div>
                <h3
                    class="mt-3 font-semibold">
                    Information
                </h3>
                <div 
                    class=" grid grid-cols-2 gap-3 mt-3">
                    <UFormGroup
                        class="w-full"
                        label="Firstname"
                        name="firstname">
                        <UInput
                            type="text"
                            variant="outline"
                            size="md"
                            name="firstname"
                            minlength="6"
                            maxlength="20"
                            placeholder="Enter you new firstname"
                            readonly
                            required/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Lastname"
                        name="lastname">
                        <UInput
                            type="text"
                            variant="outline"
                            size="md"
                            name="lastname"
                            minlength="6"
                            maxlength="20"
                            placeholder="Enter you new lastname"
                            readonly
                            required/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Email"
                        name="email">
                        <UInput
                            type="text"
                            variant="outline"
                            size="md"
                            name="email"
                            minlength="6"
                            maxlength="20"
                            placeholder="Enter you new email"
                            readonly
                            required/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Phone"
                        name="phone">
                        <UInput
                            type="text"
                            variant="outline"
                            size="md"
                            name="phone"
                            minlength="6"
                            maxlength="20"
                            placeholder="Enter you new phone"
                            readonly
                            required/>
                    </UFormGroup>
                </div>
                <UFormGroup
                    class="w-full mt-3"
                    label="Bio"
                    name="bio">
                    <UTextarea 
                        color="white" 
                        placeholder="Enter something..."
                        name="bio"
                        role="input"
                        autoresize/>
                </UFormGroup>
                <UFormGroup
                    class="w-full mt-3"
                    label="Address"
                    name="address">
                    <UTextarea 
                        color="white" 
                        placeholder="Enter address..."
                        name="address"
                        role="input"
                        autoresize/>
                </UFormGroup>
                <div 
                    class="w-full flex justify-end">
                    <UButton
                        type="submit"
                        color="blue"
                        variant="solid"
                        size="sm"
                        class="flex items-center justify-center text-md rounded-md mt-3"
                        label="Save Change"
                        square/>
                </div>
            </form>
        </div>
    </UModal>
</template>

<script setup lang="ts">
import Privacy from './privacy.vue';
import { 
    ChoosePhoto 
} from '~/components/ui';
import { 
    UserImage 
} from '~/assets/images';
definePageMeta({
    layout: 'setting',
    colorMode: 'light'
});

/**
 * Declare variable section
 */
const selected: Ref<number> = ref<number>(0);
const openModalEditeProfile: Ref<boolean> = ref<boolean>(false);
const tabs: Ref<any[]> = computed(() => [
    {
        label: 'Information'
    },
    {
        label: "Security"
    }
]);


/**
 * some logical section
 */
const openEditModal = (value: boolean) => {
    openModalEditeProfile.value = value;
}
</script>

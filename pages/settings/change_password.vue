<template>
    <div
        class="w-full flex items-center justify-center flex-col">
        <div class="w-full h-[60px] flex items-center px-6 border-b-[1px] border-gray-200">
            <h1
                class="font-semibold flex items-center gap-2">
                <UIcon  
                    name="mage:exchange-a"
                    class="w-6 h-6"/>
                Change Your Password
            </h1>
        </div>
        <div 
            class="w-full flex items-center justify-center mt-12 rounded-md p-3">
            <form
                name="signin"
                method="POST"
                enctype="multipart/form-data"
                class="panel-login w-[600px] p-3 rounded-md border-[1px] border-gray-200 bg-white flex flex-col justify-center gap-2"
                @submit.prevent="">
                <div class="flex items-center flex-col justify-center">
                        <UIcon
                            name="mage:exchange-b"
                            class="w-12 h-12"/>
                        <h3
                            class="text-[1.2rem] font-medium mt-3">
                            Change Password?
                        </h3>
                        <p
                            class="block font-thin text-[.8rem] text-gray-400">
                            Password most be contain at least 2 letters, 2 numbers and 1 symbol. Minimun length 8 characters.
                        </p>
                    </div>
                <UFormGroup
                    class="w-full mt-6"
                    label="Old Password"
                    name="password">
                    <UInput
                        :type="show.show_old ? 'text' : 'password'"
                        color="white"
                        variant="outline"
                        size="md"
                        name="password"
                        minlength="6"
                        maxlength="20"
                        placeholder="Enter you old password"
                        v-model="userPassword.old_password"
                        readonly
                        required/>
                    <UButton
                        type="button"
                        @click="show.show_old = !show.show_old"
                        variant="link"
                        color="white"
                        size="sm"
                        class="absolute top-0 right-0 w-auto h-full border-0 outline-0"
                        square>
                    <UIcon
                        :name="show.show_old ? 'fluent:eye-off-20-regular' : 'fluent:eye-24-regular'"
                        class="text-xl"/>
                    </UButton>
                </UFormGroup>
                <UFormGroup
                    class="w-full"
                    label="New Password"
                    name="password">
                    <UInput
                        :type="show.show_new ? 'text' : 'password'"
                        color="white"
                        variant="outline"
                        size="md"
                        name="password"
                        minlength="6"
                        maxlength="20"
                        placeholder="Enter you new password"
                        v-model="userPassword.new_password"
                        readonly
                        required/>
                    <UButton
                        type="button"
                        @click="show.show_new = !show.show_new"
                        variant="link"
                        color="white"
                        size="sm"
                        class="absolute top-0 right-0 w-auto h-full border-0 outline-0"
                        square>
                    <UIcon
                        :name="show.show_new ? 'fluent:eye-off-20-regular' : 'fluent:eye-24-regular'"
                        class="text-xl"/>
                    </UButton>
                </UFormGroup>
                <UFormGroup
                    class="w-full"
                    label="Confirm New Password"
                    name="">
                    <UInput
                        :type="show.show_confirm ? 'text' : 'password'"
                        color="white"
                        variant="outline"
                        size="md"
                        name=""
                        minlength="6"
                        maxlength="20"
                        placeholder="Enter you confirm new password"
                        v-model="userPassword.new_password"
                        readonly
                        required/>
                    <UButton
                        type="button"
                        @click="show.show_confirm = !show.show_confirm"
                        variant="link"
                        color="white"
                        size="sm"
                        class="absolute top-0 right-0 w-auto h-full border-0 outline-0"
                        square>
                    <UIcon
                        :name="show.show_confirm ? 'fluent:eye-off-20-regular' : 'fluent:eye-24-regular'"
                        class="text-xl"/>
                    </UButton>
                </UFormGroup>
                <UButton
                    type="submit"
                    color="black"
                    variant="solid"
                    size="md"
                    class="flex items-center justify-center text-md rounded-full mt-6"
                    label="Change New Password"
                    square/>
                <div class="w-full flex items-center text-gray-400 text-[.8rem] justify-center gap-2 mt-3">
                    Forgot old password?
                    <ULink
                        to="/settings/reset_password"
                        class=" underline text-black">
                        reset now
                    </ULink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'setting',
    colorMode: 'light'
});

/**
 * Begin::Declare variable section
 */
const userPassword: any = {
    old_password: '100999238239',
    new_password: '',
    confirm_new_password: ''
}
const show: Ref<any> = ref<any>({
    show_old: false,
    show_new: false,
    show_confirm: false
});
/**
 * End::Declare variable section
 */
</script>
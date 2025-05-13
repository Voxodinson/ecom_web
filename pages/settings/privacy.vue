<template>
    <div
        class="w-full flex flex-col items-start justify-center p-3 border-gray-200 border-[1px] rounded-md">
        <div 
            class="w-full flex items-center justify-between border-b-[1px] border-gray-200 pb-3">
            <h3
                class=" truncate">
                Account Security
            </h3>
            <ULink
                to="/settings/reset_password"
                class="border-[1px] border-blue-400 rounded-md p-1 px-3 flex items-center gap-2 text-blue-400 text-[.9rem]">
                <UIcon
                    name="material-symbols:edit-square-outline"
                    class="w-5 h-5"/>
                Change Login Passsword
            </ULink>
        </div> 
        <div 
            class="w-full grid grid-cols-2 gap-3 mt-6">
            <UFormGroup
                class="w-full"
                label="Username | Email"
                name="username">
                <UInput
                    type="text"
                    color="white"
                    variant="outline"
                    size="md"
                    name="username"
                    minlength="3"
                    maxlength="50"
                    placeholder="Enter your username"
                    v-model="user.username"
                    readonly
                    required/>
            </UFormGroup>
            <UFormGroup
                class="w-full"
                label="Password"
                name="password">
                <UInput
                    :type="show ? 'text' : 'password'"
                    color="white"
                    variant="outline"
                    size="md"
                    name="password"
                    minlength="6"
                    maxlength="20"
                    placeholder="Enter you password"
                    v-model="user.password"
                    readonly
                    required/>
                <UButton
                    type="button"
                    @click="show = !show"
                    variant="link"
                    color="white"
                    size="sm"
                    class="absolute top-0 right-0 w-auto h-full border-0 outline-0"
                    square>
                <UIcon
                    :name="show ? 'fluent:eye-off-20-regular' : 'fluent:eye-24-regular'"
                    class="text-xl"/>
                </UButton>
            </UFormGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * Begin::Declare variable section
 */
const user: any = {
    username: 'voxodinson',
    password: 'vox012990129'
}
const show: Ref<boolean> = ref<boolean>(false);
/**
 * End::Declare variable section
 */

</script>
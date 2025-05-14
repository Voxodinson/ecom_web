<template>
    <UButton
        @click.prevent="$router.back()"
        variant="soft"
        color="white"
        class=" absolute top-6 left-6 group text-[1rem] hover:underline cursor-pointer">
        <UIcon  
            name="material-symbols-light:arrow-back-ios-new-rounded"
            class="w-5 h-5  group-hover:-translate-x-2 transition">
        </UIcon>
        Back
    </UButton>
    <div
        class="w-full mx-auto flex h-[100vh]">
        
        <div
            class="panel-image bg-slate-50 w-full flex justify-center items-center">
            <div
                class="flex h-[550px] justify-center items-center bg-white shadow-sm overflow-hidden">
                <div
                    class="rounded-l-lg w-[500px] h-full relative *:text-white overflow-hidden">
                    
                    <div 
                        class="w-full h-full">
                        <img 
                            src="https://i.pinimg.com/736x/bb/53/26/bb5326fabbda9512230bb348982e42a9.jpg" 
                            alt=""
                            class="w-full h-full object-cover">
                    </div>
                    <div 
                        class=" absolute top-0 left-0 w-full h-full p-6  gap-6 flex flex-col items-center justify-center ">
                        <div 
                            class=" flex flex-col items-center justify-center">
                            <h3
                                class="text-[1.6rem] text-wrap">
                                Welcome back Username!
                            </h3>
                            <p
                                class="text-center text-[.8rem]">
                                Enter your personal details and embark on an exciting journey with us. Sign up now and start exploring new opportunities!</p>
                        </div>
                        <ULink
                            to="/register"
                            class="w-[200px] py-1 text-center rounded-full border-[1px] bg-opacity-50 bg-white border-white ">
                            Register now
                        </ULink>
                    </div>
                </div>
                <div
                    class="form-submit w-[500px] p-6">
                    <form
                        name="signin"
                        method="POST"
                        enctype="multipart/form-data"
                        class="panel-login w-full flex flex-col justify-center gap-2"
                        @submit.prevent="getData">
                        <small
                            v-if="messages"
                            class="text-center text-red-500">{{ messages }}</small>
                        <h4
                            class="text-xl text-center font-semibold my-4">
                            Login
                        </h4>
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
                        <div 
                            class="w-full flex items-center justify-end">
                            <ULink
                                to="/settings/reset_password"
                                class="text-[.7rem] hover:underline">
                                Forgot password?
                            </ULink>
                        </div>
                        <UButton
                            type="submit"
                            color="black"
                            variant="solid"
                            size="md"
                            class="flex items-center justify-center text-md rounded-full mt-6"
                            label="Login"
                            square/>
                    </form>
                    <UDivider 
                        label="OR" 
                        class="mt-3"/>
                    <UButton
                        type="submit"
                        icon="logos:google-icon"
                        color="white"
                        size="md"
                        class="w-full flex items-center justify-center rounded-full mt-6"
                        label="Google Account"
                        square/>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import {
    Validation,
    Context
} from "@/composable/validateHandler/";
import {
    GetDataContext,
    GetDataNormalForm
} from "@/composable/dataHandler/";
import {
    storeToRefs
} from 'pinia';
import {
    useAuthStore
} from '@/store/auth';
import { 
    UButton, 
    ULink 
} from "#components";
  
definePageMeta({
    layout: 'login',
    colorMode: 'light'
});
  
useSeoMeta({
    title: 'Login'
});
  
/**
 * Begin::Declare interface section
 */
interface User
{
    username: string,
    password: string
}
/**
 * End::Declare interface section
 */

/**
 * Begin::Declare variable object section
 */
const context: GetDataContext = new GetDataContext(new GetDataNormalForm());
const validate: Context = new Context(new Validation());
/**
 * End::Declare variable object section
 */

/**
 * Begin::Declare variable section
 */
const user: Ref<User> = ref<User>({
    username: '',
    password: ''
});
const { authenticateUser } = useAuthStore();
const {
    authenticated,
    messages } = storeToRefs(useAuthStore());
const router = useRouter();
const show: Ref<boolean> = ref<boolean>(false);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical in this component
 */
const getData = (event: Event): void => {
    const data: object = context.getDataForm(event as SubmitEvent) as object;
    user.value = data as User;
    login();
}
  
const login = async (): Promise<void> => {
    await authenticateUser(user.value);
    if(authenticated)
    {
      router.push('/');
    }
}
/**
 * End::Some logical in this component
 */
  </script>
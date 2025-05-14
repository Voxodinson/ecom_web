<template>
    <div
        class="w-full flex items-center justify-center flex-col">
        <div class="w-full h-[60px] flex items-center justify-between px-6 border-b-[1px] border-gray-200">
            <UButton
                @click.prevent="$router.back()"
                variant="soft"
                color="white"
                class="group text-[1rem] text-black hover:underline cursor-pointer">
                <UIcon  
                    name="material-symbols-light:arrow-back-ios-new-rounded"
                    class="w-5 h-5  group-hover:-translate-x-2 transition">
                </UIcon>
                Back
            </UButton>
            <h1
                class="font-semibold flex items-center gap-2">
                <UIcon  
                    name="material-symbols:lock-reset-sharp"
                    class="w-6 h-6"/>
                Reset Your Old Password
            </h1>
        </div>
        <div 
            class="w-full p-3">
            <UProgress
                :value="progress_bar"
                :max="['Send OTP', 'OTP Confirm', 'New Password', 'Done']"/>
        </div>
        <div 
            class="w-full flex items-center justify-center mt-12 rounded-md p-3">
            <template v-if="progress_bar === 0">
                <form
                    name="signin"
                    method="POST"
                    enctype="multipart/form-data"
                    class="panel-login w-[500px] p-3 rounded-md border-[1px] border-gray-200 bg-white flex flex-col justify-center gap-2"
                    @submit.prevent="">
                    <div class="flex items-center flex-col justify-center">
                        <UIcon
                            name="material-symbols:fingerprint-outline"
                            class="w-12 h-12"/>
                        <h3
                            class="text-[1.2rem] font-medium mt-3">
                            Forgot Password?
                        </h3>
                        <p
                            class="block font-thin text-[.8rem] text-gray-400">
                            No worries, We'll send you reset instructions.
                        </p>
                    </div>
                    <UFormGroup
                        class="w-full mt-6"
                        label="Username | Email"
                        name="username">
                        <UInput
                            type="text"
                            variant="outline"
                            size="md"
                            name="username"
                            minlength="3"
                            maxlength="50"
                            placeholder="Enter your email or username"
                            readonly
                            required/>
                    </UFormGroup>
                    <UButton
                        type="submit"
                        color="black"
                        variant="solid"
                        size="md"
                        @click="() => {
                            checkEmailAndSendOTP();
                        }"
                        class="flex items-center justify-center text-md rounded-full mt-6"
                        label="Send OTP"
                        square/>
                </form>
            </template>
            <template v-if="progress_bar === 1">
                <form
                    name="signin"
                    method="POST"
                    enctype="multipart/form-data"
                    class="panel-login w-[500px] p-3 rounded-md border-[1px] border-gray-200 bg-white flex flex-col justify-center gap-2"
                    @submit.prevent="">
                    <div class="flex items-center flex-col justify-center">
                        <UIcon
                            name="material-symbols:mail-outline-rounded"
                            class="w-12 h-12"/>
                        <h3
                            class="text-[1.2rem] font-medium mt-3">
                            OTP Code
                        </h3>
                        <p
                            class="block font-thin text-[.8rem] text-gray-400">
                            We send a code to 
                            <span
                                class="text-black ">
                                voxodinson@gmail.com
                            </span>
                        </p>
                    </div>
                    <div class="w-full h-fit flex items-center justify-center gap-2">
                        <p
                            class="block font-thin text-[.8rem] text-gray-400">
                            {{ countdownStart ? `The code has been sent.` : "Didn't get a OTP code?" }}
                        </p>
                        <UButton
                            type="submit"
                            color="white"
                            variant="solid"
                            size="sm"
                            @click="submitOtp"
                            :disabled="countdownStart"
                            class="flex items-center justify-center px-4 rounded-full text-[.8rem]"
                            :label="countdownStart ? 'Sent' : 'Resend Code'"
                            square/>
                    </div>
                    <div 
                        class="w-full h-[40px] flex items-center justify-center">
                        <span
                            v-if="countdownStart"
                            class="text-[1.2rem] font-thin">
                            {{ countdownExpiredOTP }}
                        </span>
                    </div>
                    <UContainer class="flex justify-center">
                        <div class="flex gap-3">
                            <UInput
                                v-for="(digit, index) in otp"
                                :key="index"
                                v-model="otp[index]"
                                @input="onInput($event, index)"
                                @keydown="onKeydown($event, index)"
                                ref="otpRefs"
                                type="text"
                                maxlength="1"
                                input-class="text-center text-2xl w-12 h-12"/>
                        </div>
                    </UContainer>
                    <UButton
                        type="submit"
                        color="black"
                        variant="solid"
                        size="md"
                        @click="() => {
                            checkOTPCode();
                        }"
                        class="flex items-center justify-center text-md rounded-full mt-12"
                        label="Check OTP Code"
                        square/>
                </form>
            </template>
            <template v-if="progress_bar === 2">
                <form
                    name="signin"
                    method="POST"
                    enctype="multipart/form-data"
                    class="panel-login w-[600px] p-3 rounded-md border-[1px] border-gray-200 bg-white flex flex-col justify-center gap-2"
                    @submit.prevent="">
                    <div class="flex items-center flex-col justify-center">
                        <UIcon
                            name="qlementine-icons:password-16"
                            class="w-12 h-12"/>
                        <h3
                            class="text-[1.2rem] font-medium mt-3">
                            Set New Password
                        </h3>
                        <p
                            class="block font-thin text-[.8rem] text-gray-400">
                            Must be at least
                            <span
                                class="text-black ">
                                8
                            </span>
                            characters
                        </p>
                    </div>
                    <UFormGroup
                        class="w-full"
                        label="New Password"
                        name="password">
                        <UInput
                            :type="show.show_new ? 'text' : 'password'"
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
                        @click="() => {
                            checkNewPassword();
                        }"
                        class="flex items-center justify-center text-md rounded-full mt-6"
                        label="Change Password"
                        square/>
                </form>
            </template>
            <template v-if="progress_bar === 3">
                <div 
                    class="w-[600px] bg-white flex flex-col items-center justify-center gap-2">
                    <UIcon
                        name="material-symbols:published-with-changes-rounded"
                        class="w-20 h-20 text-green-500"/>
                     <h3
                        class="text-[1.2rem] font-medium mt-3">
                        Your new password change successfully!!
                    </h3>
                    <ULink
                        to="/login"
                        class="border-[1px] border-blue-400 rounded-md mt-12 p-1 px-3 flex items-center gap-2 text-blue-400 text-[.9rem]">
                        <UIcon
                            name="si:sign-in-duotone"
                            class="w-5 h-5"/>
                        Login with new Passsword
                    </ULink>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    ref, 
    reactive, 
    nextTick 
} from 'vue'

definePageMeta({
    layout: 'setting',
    colorMode: 'light'
});
/**
 * Begin::Declare variable section
 */

//OTP
const otpLength: any = 6;
const otp: any = reactive(Array(otpLength).fill(''))
const otpRefs: Ref<any[]> = ref<any[]>([])
const progress_bar: Ref<number> = ref<number>(0);
let countdownExpiredOTP: Ref<number> = ref<number>(60);
const countdownStart: Ref<boolean> = ref<boolean>(false); 
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

/**
 * Begin:: OTP section
 */

const startCountdown = () => {
    //disabled function when interval on working
    if (countdownStart.value) return

    countdownStart.value = Boolean(true);
    countdownExpiredOTP.value = Number(60);

    const interval = setInterval(() => {
        if (countdownExpiredOTP.value > 0) {
            countdownExpiredOTP.value--
        } else {
            countdownStart.value = Boolean(false);
            clearInterval(interval);
        }
    }, 1000);
}

function onInput(event: any, index: number) {
    const value = event.target.value
    if (!/^[0-9]?$/.test(value)) {
        otp[index] = ''
        return
    }

    if (value.length === 1 && index < otp.length - 1) {
        nextTick(() => otpRefs.value[index + 1]?.input?.focus());
    }
}

function onKeydown(event: any, index: number) {
    const isBackspace = event.key === 'Backspace'

    if (isBackspace && otp[index] === '' && index > 0) {
        nextTick(() => otpRefs.value[index - 1]?.input?.focus());
    }
}

const getOtpValue = () => {
    return otp.join('')
}

function submitOtp() {
    getOtpValue();
    startCountdown();
}
/**
 * End: OPT section
 */

/**
 * Begin:: Reset step
 */
const checkEmailAndSendOTP = () => {
    progress_bar.value += Number(1);
}

const checkOTPCode = () => {
    progress_bar.value += Number(1);
}

const checkNewPassword = () => {
    progress_bar.value += Number(1);
}
/**
 * End:: Reset step
 */
</script>
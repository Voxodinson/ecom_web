<template>
    <div
        class="w-full h-fit bg-white flex flex-col items-center justify-center">
        <div 
            class="w-full h-full px-6 mt-3">
            <div 
                class="w-full flex items-center justify-center p-3 bg-green-500 gap-3 shadow-md rounded-md">
                <UIcon
                    name="fluent-emoji-flat:glowing-star"
                    class="w-10 h-10"/>
                <p  
                    class="text-white">
                    New menber 
                    <span
                        class="text-yellow-400 capitalize">
                        get free shipping
                    </span>
                    with 2 time orders from our website
                    <ULink
                        class="text-white text-[.9rem] underline capitalize">
                        Register Now.....
                    </ULink>
                </p>
            </div>
            <div 
                class="w-full grid mt-3 grid-cols-5 justify-center">
                <div 
                    class="flex flex-col gap-3">
                    <h3
                        class="text-[1.2rem] font-semibold">
                        Website Name Online Market
                    </h3>
                    <span
                        class="font-semibold text-[1.2rem] text-green-400">
                        <span
                            class="text-gray-400 block uppercase font-thin text-[.9rem]">
                            hotline 24/7
                        </span>
                        (025) 3686 25 16
                    </span>
                    <span
                        class="text-[.9rem] text-gray-400">
                        257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
                    </span>
                    <span
                        class="text-[.9rem] text-gray-400">
                        Voxodinson@gmail.com
                    </span>
                    <div 
                        class="flex items-center gap-6">
                        <a 
                            v-for="(item, idx) in social_link"
                            :key="idx"
                            :href="item.to"
                            class="hover:scale-125 transition">
                            <UIcon 
                                :name="item.icon" 
                                class="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div 
                    class="flex flex-col items-center gap-3">
                    <h3
                        class="text-[1.2rem] font-semibold uppercase">
                        Top Categories
                    </h3>
                    <ul
                        class="flex flex-col items-start justify-start">
                        <li
                            v-for="i in 10">
                            <ULink
                                to=""
                                active-class="bg-green-400 bg-black rounded-full "
                                class="text-[.9rem]"
                                inactive-class="text-gray-400 hover:text-green-300 font-thin transition">
                                Lorem, ipsum dolor.
                            </ULink>
                        </li>
                    </ul>
                </div>
                <div 
                    class="flex flex-col items-center gap-3">
                    <h3
                        class="text-[1.2rem] font-semibold uppercase">
                        company
                    </h3>
                    <ul
                        class="flex flex-col items-start justify-start">
                        <li
                            v-for="i in 4">
                            <ULink
                                to=""
                                active-class="bg-green-400 bg-black rounded-full "
                                class="text-[.9rem]"
                                inactive-class="text-gray-400 hover:text-green-300 font-thin transition">
                                Lorem, ipsum dolor.
                            </ULink>
                        </li>
                    </ul>
                </div>
                <div 
                    class="flex flex-col items-center gap-3">
                    <h3
                        class="text-[1.2rem] font-semibold uppercase">
                        help center
                    </h3>
                    <ul
                        class="flex flex-col items-start justify-start">
                        <li
                            v-for="i in 6">
                            <ULink
                                to=""
                                active-class="bg-green-400 bg-black rounded-full "
                                class="text-[.9rem]"
                                inactive-class="text-gray-400 hover:text-green-300 font-thin transition">
                                Lorem, ipsum dolor.
                            </ULink>
                        </li>
                    </ul>
                </div>
                <div 
                    class="flex flex-col items-center gap-3">
                    <h3
                        class="text-[1.2rem] font-semibold uppercase">
                        partner
                    </h3>
                    <ul
                        class="flex flex-col items-start justify-start">
                        <li
                            v-for="i in 6">
                            <ULink
                                to=""
                                active-class="bg-green-400 bg-black rounded-full "
                                class="text-[.9rem]"
                                inactive-class="text-gray-400 hover:text-green-300 font-thin transition">
                                Lorem, ipsum dolor.
                            </ULink>
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                class="w-full flex items-center justify-end border-t-[1px] mt-3 border-gray-400">
                <div 
                    class="py-2 w-1/2 flex flex-col gap-3">
                    <h3
                        class="text-[1.2rem] font-semibold uppercase">
                        subscribe & get 10% off for your first order
                    </h3>
                    <form
                        method="POST"
                        enctype="multipart/form-data"
                        @submit.prevent="getData"
                        name="customer"
                        class="bg-white w-full rounded-md flex gap-3 justify-end">
                        <UInput 
                            placeholder="Youre email here..."
                            variant="none"
                            class="border-b-[1px] border-gray-400 w-full"/>
                        <UButton
                            class="">
                            Submit
                        </UButton>
                    </form>
                    <span
                        class="text-[.8rem] text-gray-400">
                        By subscribing, you’re accepted the our
                        <ULink
                            to=""
                            active-class="bg-green-400 bg-black rounded-full "
                            class="text-[.8rem] italic hover:underline"
                            inactive-class="text-gray-400 font-thin transition">
                            Policy
                        </ULink>
                    </span>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#2973B2] h-[50px] flex items-center justify-center">
            <span
                class="text-white text-[.9rem]">
                © 2024 
                <span class="italic">
                    Campany Name
                </span> 
                . All Rights Reserved
            </span>
        </div>
    </div>
</template>

<script setup>
import { UInput } from '#components';


/**
 * Begin::Declare variable section
 */
const social_link = [
    {
        to:'',
        icon: 'logos:facebook'
    },
    {
        to:'',
        icon: 'hugeicons:new-twitter'
    },
    {
        to:'',
        icon: 'skill-icons:instagram'
    },
    {
        to:'',
        icon: 'logos:youtube-icon'
    },
    {
        to:'',
        icon: 'logos:pinterest'
    }
]
/**
 * End::Declare variable section
 */
</script>
<template>
    <div 
        class="w-full flex mt-[80px] flex-col items-center justify-center">
        <div 
            class="w-[90%] h-fit">
            <UBreadcrumb 
                :links="links" 
                :ui="{
                    active: 'text-sky-400 dark:text-sky-400',
                }"/>
        </div>
        <div 
            class="w-[90%] h-fit">
            <div 
                class="w-full grid grid-cols-[80%_20%] py-3">
                <div 
                    class="w-full">
                    <h1
                        class=" font-semibold text-[1.3rem]">
                        Angkor Wat Temple
                    </h1>
                    <div 
                        class="w-full py-3 flex gap-3">
                        <div 
                            class="w-fit flex items-center gap-1">
                            <UIcon
                                name="material-symbols:location-on-outline"
                                class="w-5 h-5 text-black"/>
                            <span
                                class="text-[.8rem]">
                                Siemreap
                            </span>
                        </div>
                        <div
                            class="flex w-fit gap-1 items-center">
                            <UIcon
                                name="material-symbols:star-rounded"
                                class="w-5 h-5 text-yellow-500"/>
                            <div 
                                class="w-fit text-[.8rem]">
                                4.9
                                <span
                                    class="text-gray-400">
                                    ( 1000 reviews )
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    class="w-full flex items-start justify-end gap-3">
                    <UButton 
                        variant="soft"
                        color="white"
                        class="flex gap-1 items-center border-gray-200 py-1 border-[1px] hover:border-yellow-500 transition rounded-full bg-white group">
                        <UIcon
                            name="ic:round-favorite"
                            class="w-5 h-5 text-gray-200 group-hover:scale-110 group-hover:text-yellow-500 transition cursor-pointer"/>
                        <span
                            class="text-[.9rem] text-gray-400 group-hover:text-yellow-500 transition">
                            Favorite
                        </span>
                    </UButton>
                    <UButton 
                        variant="soft"
                        color="white"
                        class="flex gap-1 items-center border-sky-200 py-1 border-[1px] rounded-full bg-white group">
                        <UIcon
                            name="ic:baseline-share"
                            class="w-5 h-5 text-sky-400 group-hover:scale-110 transition cursor-pointer"/>
                        <span
                            class="text-[.9rem] text-sky-400">
                            Share
                        </span>
                    </UButton>
                </div>
            </div>
            <div 
                class="w-full h-[60vh] border-b-[1px] border-gray-200 pb-3">
                <div 
                    class="w-full h-full grid grid-cols-2 gap-3">
                    <div
                        @click="openSlideImageModal(Boolean(true))"
                        class="w-full rounded-md overflow-hidden">
                        <img 
                            :src="userCommand[0].image" 
                            alt="image"
                            class="w-full h-full object-cove hover:scale-110 transition cursor-pointer">
                    </div>
                    <div 
                        class="w-full h-[59vh] grid grid-cols-2 grid-rows-2 gap-3">
                        <div
                            v-for="(item, idx) in userCommand.slice(1, 5)"
                            :key="idx"
                            @click="() => {
                                slideshow_CurrentIndex = idx + 1 as number;
                                openSlideImageModal(Boolean(true));
                            }"
                            class="w-full h-full relative rounded-md overflow-hidden group ">
                            <img 
                                :src="item.image" 
                                alt="image"
                                class="w-full h-full object-cover group-hover:scale-110 transition cursor-pointer">
                            <div 
                                v-if="idx === 3"
                                @click="() => {
                                    openSlideImageModal(Boolean(true));
                                }"
                                class="w-full h-full z-50 flex cursor-pointer items-center justify-center absolute top-0 left-0 inset-0 bg-black/50 backdrop-blur-xs">
                                <span
                                    class="text-white text-[2rem] font-thin z-30">
                                    +{{ userCommand.length - 4}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                class="w-full h-fit mt-12">
                <UTabs 
                    :items="tabs" 
                    v-model="selected"
                    class="w-full mb-12"/>
                <template
                    v-if="selected === 0">
                    <div class="w-full border-b-[1px] border-gray-200 pb-3">
                        <div 
                            class="flex gap-3 mt-3">
                            <div 
                                class="w-[40px] h-[40px] rounded-full overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
                                    alt="user profile"
                                    class="w-full h-full object-cover">
                            </div>
                            <div 
                                class="">
                                <h3>
                                    Vox Odinson
                                </h3>
                                <span
                                    class="text-[.7rem] flex gap-1 left-3 items-center text-gray-400">
                                    <UIcon
                                        name="mdi:earth"
                                        class="w-3.5 h-3.5 text-gray-300"/>
                                        10-5-2025 12:45:00
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full grid grid-cols-2 gap-3 border-b-[1px] border-gray-200 pb-12">
                        <div 
                            class="w-full mt-3">
                            <h3
                                class=" capitalize font-semibold ">
                                About this destination
                            </h3>
                            <p
                                v-for="i in 4"
                                class="mt-3 text-gray-500 text-[.9rem]">
                                Angkor Wat is famous for several reasons: it's the world's largest religious monument, a masterpiece of Khmer architecture, and a symbol of both Cambodia and the ancient Khmer civilization. Its intricate carvings, elaborate design representing the Hindu universe, and historical significance all contribute to its global recognition. 
                            </p>
                        </div>
                        <div 
                            class="w-full h-fit sticky top-3 border-[1px] border-gray-200 shadow-sm rounded-md p-3 mt-3">
                            <h3
                                class="capitalize font-semibold ">
                                Nearby Places
                            </h3>
                            <div 
                                class="w-full flex flex-wrap gap-3 mt-6">
                                <div 
                                    v-for="(item, idx) in nearbyPlaces"
                                    :key="idx"
                                    class="w-fit text-[.9rem] flex gap-2 items-center border-[1px] border-gray-200 p-1 px-3 rounded-full">
                                    <UIcon
                                        :name="item.icon"
                                        class="w-5 h-5"/>
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template
                    v-if="selected === 1">
                    <div 
                        class="w-full grid grid-cols-2 pb-12 border-b-[1px] border-gray-200">
                        <div 
                            class="w-full flex items-center justify-center flex-col">
                            <h3 class="text-[.8rem] text-gray-400">Rating Overall</h3>
                            <div 
                                class="w-full flex flex-col items-center justify-center">
                                <h3
                                    class="text-[2.5rem] font-bold ">
                                    {{ rating }}
                                </h3>
                                <p
                                    class="text-gray-400 text-[0.8rem]">
                                    Based on {{ totalRatings }} reviews
                                </p>
                            </div>
                            <div class="flex">
                                <UIcon
                                    v-for="i in Math.floor(rating)"
                                    :key="i"
                                    name="material-symbols:star-rounded"
                                    class="w-10 h-10 text-yellow-500"/>
                                <UIcon
                                    v-if="rating % 1 !== 0"
                                    name="material-symbols:star-half-rounded"
                                    class="w-10 h-10 text-yellow-500"/>
                                <UIcon
                                    v-for="i in 5 - Math.ceil(rating)"
                                    :key="'empty-' + i"
                                    name="material-symbols:star-outline"
                                    class="w-10 h-10 text-yellow-500"/>
                            </div>
                        </div>
                        <div class="w-full flex flex-col">
                            <div class="p-2 space-y-2">
                                <h3 class="text-xl font-bold mb-4">Rating Breakdown</h3>
                                <div 
                                    v-for="(item, index) in ratingBreakdown" 
                                    :key="index">
                                    <div class="flex justify-between items-center">
                                        <span 
                                            class="capitalize text-[.8rem] text-gray-400">
                                            {{ item.label }}
                                        </span>
                                        <span
                                            class="text-[.8rem] text-gray-400">
                                            {{ item.count }}
                                        </span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            class="h-3 rounded-full"
                                            :class="item.color"
                                            :style="{ width: (item.count / totalRatings * 100) + '%' }">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        class="w-full grid grid-cols-2 gap-3 mt-3">
                        <div 
                            class="flex flex-col gap-3">
                            <h3>
                                Community reviews & feedbacks
                            </h3>
                            <div
                                v-for="(i, idx) in 10" 
                                class="flex w-full h-fit p-3 gap-3"
                                :class="idx !== 1 ? 'border-b-[1px] border-gray-200' : ''">
                                <div 
                                    class="w-[60px] h-[60px] rounded-full overflow-hidden">
                                    <img 
                                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
                                        alt=""
                                        class="w-full h-full object-cover">
                                </div>
                                <div 
                                    class="flex w-[calc(100%-70px)] flex-col">
                                    <div class="flex w-full justify-between">
                                        <h3
                                            class=" font-semibold capitalize">Vox Odinson</h3>
                                        <div 
                                            class="flex">
                                            <UIcon
                                                v-for="i in Math.floor(rating)"
                                                :key="i"
                                                name="material-symbols:star-rounded"
                                                class="w-5 h-5 text-yellow-500"/>
                                            <UIcon
                                                v-if="rating % 1 !== 0"
                                                name="material-symbols:star-half-rounded"
                                                class="w-5 h-5 text-yellow-500"/>
                                            <UIcon
                                                v-for="i in 5 - Math.ceil(rating)"
                                                :key="'empty-' + i"
                                                name="material-symbols:star-outline"
                                                class="w-5 h-5 text-yellow-500"/>
                                        </div>
                                    </div>
                                    <div 
                                        class="w-full">
                                        <p
                                            class="text-gray-500 text-[.9rem] overflow-hidden text-ellipsis w-full"
                                            :class="isExpanded ? '' : 'line-clamp-2'">
                                            The experience was very pleasant. Communication was clear, and the process was efficient. I would recommend it to others.
                                            Good quality and friendly service. A few minor issues but nothing that impacted the overall positive experience.
                                        </p>
                                        <span
                                            class="text-sky-400 inline-block text-[.9rem] cursor-pointer mt-1"
                                            @click="isExpanded = !isExpanded">
                                            {{ isExpanded ? 'Show less' : 'Read more' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form
                            name="exam"
                            method="POST"
                            enctype="multipart/form-data"
                            @submit.prevent=""
                            class="w-full p-3 sticky top-3 border-gray-200 border-[1px] shadow-sm h-fit rounded-md ">
                            <div 
                                class="flex cursor-pointer py-12 flex-col items-center justify-center">
                                <h3
                                    class="text-gray-400 text-[.9rem]">
                                    Give an overall rating for this place
                                </h3>
                                <div class="flex">
                                    <UIcon
                                        v-for="i in 5"
                                        :key="i"
                                        :name="i <= userRating ? 'material-symbols:star-rounded' : 'material-symbols:star-outline-rounded'"
                                        class="w-10 h-10 font-thin text-gray-300"
                                        :class="ratingStatus.color"
                                        @click="getRating(Number(i))"/>
                                </div>
                                <span
                                    class=" capitalize text-[.8rem]"
                                    :class="ratingStatus.color">
                                    {{ ratingStatus.label }}
                                </span>
                            </div>
                            <UFormGroup
                                class="w-full mt-3"
                                label="What did you like or dislike about this place?"
                                name="review">
                                <UTextarea 
                                    color="white" 
                                    placeholder="Enter something about this place..."
                                    name="review"
                                    role="input"
                                    autoresize/>
                            </UFormGroup>
                            <div 
                                class="w-full flex items-center justify-end mt-3">
                                <UButton
                                    type="button"
                                    size="sm"
                                    color="black"
                                    label="Send"
                                    icon="mingcute:send-line"
                                    variant="soft" 
                                    :padded="false"
                                    class="bg-sky-500 text-white hover:bg-sky-400 p-1 px-3 transition"/>
                            </div>
                        </form>
                    </div>
                </template>
                <template
                    v-if="selected === 2">
                    3
                </template>
                <template
                    v-if="selected === 3">
                    4
                </template>
                <template
                    v-if="selected === 4">
                    5
                </template>
            </div>
            <div 
                class="w-full my-12">
                <h3>
                    Google Map
                </h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.983081595086!2d104.90949751147967!3d11.553070388599544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951006a3e5d57%3A0x2d07546ae696875b!2sGTech%20Cambodia!5e0!3m2!1sen!2skh!4v1746862363331!5m2!1sen!2skh" 
                    class="w-full h-[60vh] rounded-md overflow-hidden "
                    style="border:0;" 
                    allowfullscreen="false" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
    <UModal 
        v-model="isOpenSlideImage_modal"
        :ui="{
            width: 'w-[96%] sm:max-w-1/2 h-[90vh]',
        }">
        <div 
            class="w-full h-full overflow-auto bg-white rounded-md ">
            <div class="w-full h-[50px] flex p-2 justify-between items-center border-b-[1px] border-gray-200">
                <h3
                    class=" capitalize font-semibold">
                    all reviews & images
                </h3>
                <UIcon
                    name="material-symbols:close-rounded"
                    class="w-7 h-7 text-black font-thin hover:scale-110 transition cursor-pointer"
                    @click="() => {
                        openSlideImageModal(Boolean(false));
                    }"/>
            </div>
            <div 
                class="w-full h-[calc(100%-50px)] grid grid-cols-[30%_70%] p-6">
                <div 
                    class="mt-4 px-4 w-full h-full overflow-auto" 
                    v-if="slideshow_currentItem">
                    <div 
                        class="w-full flex gap-3 border-b-[1px] border-gray-200 pb-6">
                        <div 
                            class="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img 
                                :src="slideshow_currentItem.user.profile || UserImage" 
                                alt="user profile"
                                class="w-full h-full object-cover">
                        </div>
                        <div 
                            class="w-[calc(100%-50px)]">
                            <div 
                                class="flex justify-between w-full items-center">
                                <h3>
                                    {{ slideshow_currentItem.user.name }}
                                </h3>
                                <div 
                                    class="flex">
                                    <UIcon
                                        v-for="i in Math.floor(slideshow_currentItem.rating)"
                                        :key="i"
                                        name="material-symbols:star-rounded"
                                        class="w-5 h-5 text-yellow-500"/>
                                    <UIcon
                                        v-if="slideshow_currentItem.rating % 1 !== 0"
                                        name="material-symbols:star-half-rounded"
                                        class="w-5 h-5 text-yellow-500"/>
                                    <UIcon
                                        v-for="i in 5 - Math.ceil(slideshow_currentItem.rating)"
                                        :key="'empty-' + i"
                                        name="material-symbols:star-outline"
                                        class="w-5 h-5 text-yellow-500"/>
                                </div>
                            </div>
                            <span
                                class="text-[.7rem] flex gap-1 left-3 items-center text-gray-400">
                                <UIcon
                                    name="mdi:earth"
                                    class="w-3.5 h-3.5 text-gray-300"/>
                                    10-5-2025 12:45:00
                            </span>
                        </div>
                    </div>
                    <p 
                        class="text-gray-700 mt-2 text-wrap">
                        {{ slideshow_currentItem.desc }}
                    </p>
                </div>
                <div 
                    class=" bg-black w-full h-full relative rounded-md overflow-hidden">
                    <div 
                        class="flex h-full transition-transform duration-500 ease-in-out" 
                        :style="{ transform: `translateX(-${slideshow_CurrentIndex * 100}%)` }">
                        <div
                            v-for="(item, index) in userCommand"
                            :key="index"
                            class="flex-shrink-0 w-full h-full">
                            <img
                                :src="item.image"
                                class="w-full h-full object-scale-down rounded-lg"
                                alt="feedback image"/>
                        </div>
                    </div>
                    <div 
                        class="w-full absolute bottom-0 p-2 z-30 overflow-x-auto bg-white bg-opacity-50">
                        <div 
                            class="w-fit flex gap-2">
                            <div 
                                v-for="(item, idx) in userCommand"
                                class="w-[50px] h-[50px] rounded-md overflow-hidden"
                                :class="idx === slideshow_CurrentIndex ? ' border-[3px] border-sky-400' : ' border-white'"
                                @click="() => {
                                    slideshow_CurrentIndex = idx as number;
                                }">
                                <img 
                                    :src="item.image" 
                                    alt="feedback image"
                                    class="w-full h-full object-cover hover:scale-110 transition cursor-pointer">
                            </div>
                        </div>
                    </div>
                    <button
                        @click="prevSlide"
                        class="absolute left-4 top-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition focus:outline-none">
                        <UIcon
                            name="material-symbols:chevron-left-rounded"
                            class="w-12 h-12 mr-1"/>
                    </button>
                    <button
                        @click="nextSlide"
                        class="absolute right-4 top-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition focus:outline-none">
                        <UIcon
                            name="material-symbols:chevron-right-rounded"
                            class="w-12 h-12 ml-1"/>
                    </button>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script lang="ts" setup>
import {
    ContextAPI,
    SimpleAPI
} from "@/composable/apiHandler";
import {
    GetDataContext,
    GetDataNormalForm
} from "@/composable/dataHandler";
import type { 
    ResponseStatus
} from '~/models/type';
import { 
    useRoute 
} from 'nuxt/app';
import { 
    UserImage 
} from "~/assets/images";
definePageMeta({
    colorMode: 'light'
});

/**
 * Begin::Declare variable object section
 */
const api: ContextAPI = new ContextAPI(new SimpleAPI());
const context: GetDataContext = new GetDataContext(new GetDataNormalForm());

/**
 * End::Declare variable object section
 */
/**
 * Begin::Declare variable section
 */
const ratingBreakdown = [
    { label: 'excellent', count: 1000, color: 'bg-green-500' },
    { label: 'good', count: 300, color: 'bg-blue-400' },
    { label: 'average', count: 185, color: 'bg-yellow-400' },
    { label: 'below average', count: 82, color: 'bg-orange-400' },
    { label: 'poor', count: 100, color: 'bg-red-500' },
];
const route = useRoute();
const productId = route.params.id;
const data: Ref<any> = ref<any>({});
const dataRecommend: Ref<any> = ref<any>({});
const rating: Ref<number> = ref<number>(4.9);
const userRating: Ref<number> = ref<number>(0);
const ratingStatus: Ref<any> = ref<any>({})
const totalRatings = ratingBreakdown.reduce((sum, item) => sum + item.count, 0);
const isExpanded: Ref<boolean> = ref<boolean>(false);
const isOpenSlideImage_modal: Ref<boolean> = ref<boolean>(false);
const slideshow_CurrentIndex: Ref<number> = ref<number>(0);
const links = [
    {
        label: 'Travel',
        icon: 'ic:round-travel-explore',
        to: '/'
    }, 
    {
        label: 'Siemreap',
        icon: 'material-symbols:location-on-outline'
    }
];
const selected: Ref<number> = ref<number>(0);
const tabs: Ref<any[]> = computed(() => [
    {
        label: 'Overview'
    },
    {
        label: "Reviews"
    },
    {
        label: "FAQs"
    }
]);
const nearbyPlaces: any[] = [
  { icon: 'material-symbols:home-work-outline-rounded', name: 'Hotel' },
  { icon: 'material-symbols:restaurant', name: 'Restaurant' },
  { icon: 'material-symbols:local-cafe', name: 'Café' },
  { icon: 'ic:outline-local-grocery-store', name: 'Grocery' },
  { icon: 'material-symbols:park', name: 'Park' },
  { icon: 'material-symbols:local-gas-station', name: 'Gas Station' },
  { icon: 'material-symbols:local-pharmacy', name: 'Pharmacy' },
  { icon: 'material-symbols:atm', name: 'ATM' },
  { icon: 'material-symbols:school', name: 'School' },
  { icon: 'material-symbols:local-laundry-service', name: 'Laundry' },
  { icon: 'material-symbols:home-work-outline-rounded', name: 'Hotel' },
  { icon: 'material-symbols:restaurant', name: 'Restaurant' },
  { icon: 'material-symbols:local-cafe', name: 'Café' },
  { icon: 'ic:outline-local-grocery-store', name: 'Grocery' },
  { icon: 'material-symbols:park', name: 'Park' },
  { icon: 'material-symbols:local-gas-station', name: 'Gas Station' },
  { icon: 'material-symbols:local-pharmacy', name: 'Pharmacy' },
  { icon: 'material-symbols:atm', name: 'ATM' },
  { icon: 'material-symbols:school', name: 'School' },
  { icon: 'material-symbols:local-laundry-service', name: 'Laundry' },
];

const userCommand: any = [
    {
        user: {
            name: 'Vox Odinson',
            profile: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        desc: 'Location of the hotel & views from all windows including lobby, room, restaurant',
        image: 'https://i.pinimg.com/736x/08/ac/0b/08ac0bbfddbf5385e17c7420df7bf942.jpg',
        rating: 4,
        date: '10-05-2023 12:30:00'
    },
    {
        user: {
            name: 'Vox Odinson',
            profile: ''
        },
        name: 'Vox Odinson 2',
        desc: 'Location of the hotel & views from all windows including lobby, room, restaurant& views from all windows including lobby, room, restaurant',
        image: 'https://i.pinimg.com/736x/01/15/c7/0115c7346b28bbb3a9eefe1447dae0d8.jpg',
        rating: 4,
        date: '10-05-2023 12:30:00'
    },
    {
        user: {
            name: 'Vox Odinson',
            profile: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        name: 'Vox Odinson 3',
        desc: 'Location of the hotel & views from all windows including lobby, room, restaurant& views from all windows including lobby, room, restaurant',
        image: 'https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg',
        rating: 2,
        date: '10-05-2023 12:30:00'
    }
]
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical section
 */
 function getRatingStatus(rating: number) {
    switch (rating) {
        case 5:
            return { label: 'excellent', color: 'text-green-500' }
        case 4:
            return { label: 'good', color: 'text-sky-400' }
        case 3:
            return { label: 'average', color: 'text-yellow-400' }
        case 2:
            return { label: 'below average', color: 'text-orange-400' }
        case 1:
        default:
            return { label: 'poor', color: 'text-red-500' }
    }
}

function getRating(value: number) {
    userRating.value = value as number;
    if(userRating.value){
        ratingStatus.value = getRatingStatus(Number(userRating.value));
    }
}

const openSlideImageModal = (value: boolean) => {
    if(value === false){
        slideshow_CurrentIndex.value = 0;
    }
    isOpenSlideImage_modal.value = value as boolean;
}

const slideshow_currentItem = computed(() => {
    return userCommand[slideshow_CurrentIndex.value] || null
})

function prevSlide() {
    if (slideshow_CurrentIndex.value > 0) {
        slideshow_CurrentIndex.value--;
    }
}

function nextSlide() {
    if (slideshow_CurrentIndex.value < userCommand.length - 1) {
        slideshow_CurrentIndex.value++;
    }
}
/**
 * End::Some logical section
 */

/**
 * Begin::Fetch data section
 */
 const getData = async (event: Event): Promise<void> => {
    const formData: object = context.getDataForm(event as SubmitEvent) as object;
    console.log(formData)
    const result: ResponseStatus = await api.post('', true, formData) as ResponseStatus;

    if(!result.error)
    {
        (event.target as HTMLFormElement).reset();
    }
}

 const fetchData = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = `https://fakestoreapi.com/products/${productId}`;
    if(search)
    {
        url += `&search=${search}`;
    }
    const result: ResponseStatus = await api.get(url) as ResponseStatus;
    if(!result.error)
    {
        data.value = result as any;
    }
    console.log(data.value)
}

const fetchRecommend = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = `https://fakestoreapi.com/products`;
    if(search)
    {
        url += `&search=${search}`;
    }
    const result: ResponseStatus = await api.get(url) as ResponseStatus;
    if(!result.error)
    {
        dataRecommend.value = (result as any).slice(0, 4);
    }
}
/**
 * Begin::Fetch data section
 */

// onMounted(async (): Promise<void> => {
//     await fetchData();
//     await fetchRecommend();
// })
</script>
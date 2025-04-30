<template>
    <div
        v-for="(data, idx) in props.data"
        :key="idx"
        class="w-full h-fit flex flex-col border-gray-3 justify-between rounded-md relative rmd overflow-hidden">
        <div class="h-[250px] w-full rounded-md overflow-hidden">
            <ULink
                :to="`/travels/${data.id}`"
                class="w-full relative h-full cursor-pointer group">
                <img 
                    src="https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg" 
                    alt="image"
                    class="w-full h-full object-cover group-hover:scale-110 transition">
                <div 
                    class=" absolute bottom-1 left-1">
                    <h3
                        class="font-semibold text-white text-shadow">
                        {{ data.province.name }}
                    </h3>
                    <div
                        class="flex gap-2 items-center">
                        <UIcon
                            name="material-symbols:location-on-outline"
                            class="w-4 h-4 text-gray-300"/>
                        <p
                            class="text-white text-[.8rem] text-shadow">
                            <!-- {{ data.district.name }}, {{ data.commune.name }}, {{ data.village.name }} -->
                            Battambang, Prek Preah Sdach, 13 Meakkakra
                        </p>
                    </div>
                </div>
            </ULink>
        </div>
        <div 
            class="w-full py-3 h-fit flex flex-col">
            <h3
                class="text-gray-600 text-[1rem] overflow-hidden text-ellipsis w-full line-clamp-1">
                {{ data.name }}
            </h3>
            <span
                class="text-[.7rem] flex gap-1 left-3 items-center text-gray-400">
                <UIcon
                    name="mdi:earth"
                    class="w-3.5 h-3.5 text-gray-300"/>
                {{ data.published_at }}
            </span>
            <p 
                class="text-gray-400 text-[.9rem] mt-1 overflow-hidden text-ellipsis w-full line-clamp-2">
                {{ data.short_description }}
            </p>
            <div class="w-full mt-3 flex flex-wrap items-center gap-2">
                <div class="flex gap-1 items-center">
                    <UIcon
                        name="bx:bxs-like"
                        class="w-5 h-5 text-gray-300 hover:scale-110 transition cursor-pointer"/>
                    <span
                        class="text-[.9rem] text-gray-400">
                        100
                    </span>
                </div>
                <div class="flex gap-1 items-center">
                    <UIcon
                        name="bxs:dislike"
                        class="w-5 h-5 text-gray-300 hover:scale-110 transition cursor-pointer"/>
                    <span
                        class="text-[.9rem] text-gray-400">
                        Dislike
                    </span>
                </div>
                <div class="flex gap-1 items-center">
                    <UIcon
                        name="weui:eyes-on-filled"
                        class="w-6 h-6 text-gray-300 hover:scale-110 transition cursor-pointer"/>
                    <span
                        class="text-[.9rem] text-gray-400">
                        10.2k
                    </span>
                </div>
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
                <UIcon
                    name="ic:round-favorite"
                    class="w-7 h-7 text-gray-300 hover:scale-110 transition cursor-pointer"/>
                <span
                    class="text-gray-400 font-thin mx-2">
                    |
                </span>
                <div
                    @click="()=> {
                        openReview(Boolean(true));
                    }" 
                    class="flex gap-3 items-center bg-yellow-100 px-3 py-1 rounded-full w-fit cursor-pointer">
                    <UIcon
                        name="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-500"/>
                    <div 
                        class="w-fit text-[.8rem]">
                        4.9 of 1000 reviews
                    </div>
                </div>
                <div 
                    class="flex gap-3 items-center bg-blue-100 px-3 py-1 rounded-full w-fit">
                    <UIcon
                        name="hugeicons:money-send-square"
                        class="w-5 h-5 text-blue-500"/>
                    <div 
                        class="w-fit text-[.8rem]">
                        $100 - $200
                    </div>
                </div>
                <ULink
                    target="__blank"
                    to="https://www.google.com/maps/place/Vimean+Pi+Phup+Thmey+Sen+Sok+Wedding+Center/@11.5769344,104.8838144,14z/data=!4m6!3m5!1s0x3109522c5a83ff8d:0x8d7a9b53236beb4f!8m2!3d11.5968836!4d104.888676!16s%2Fg%2F11c5x7hrfw?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                    active-class="bg-white bg-black text-black py-2 px-4 rounded-full "
                    class="text-[.9rem]"
                    inactive-class=" flex gap-3 items-center bg-green-200 px-3 py-1 rounded-full w-fit cursor-pointer">
                    <UIcon
                        name="material-symbols-light:map-search-outline"
                        class="w-5 h-5 text-green-500"/>
                    <div 
                        class="w-fit text-[.8rem]">
                        Map View
                    </div>
                </ULink>
            </div>
        </div>
    </div>
    <UModal 
        v-model="isOpenReview"
        :ui="{
            width: 'w-[70%] sm:max-w-[70%] max-h-[90vh]',
        }">
        <div 
            class="w-full h-full overflow-auto bg-white rounded-md ">
            <div class="w-full flex p-2 justify-between items-center border-b-[1px] border-gray-200">
                <h3>
                    Reviews and Feedback
                </h3>
                <UIcon
                    name="material-symbols:close-rounded"
                    class="w-7 h-7 text-black font-thin hover:scale-110 transition cursor-pointer"
                    @click="() => {
                        openReview(Boolean(false));
                    }"/>
            </div>
            <div 
                class="h-fit p-3 pb-3">
                <UTabs 
                    :items="tabs" 
                    v-model="selected"
                    class="w-full"/>
                <template 
                    v-if="selected === 0">
                    <div 
                        class="w-full grid grid-cols-2 pb-3 border-b-[1px] border-gray-200">
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
                        class="w-full">
                        <div
                            v-for="(i, idx) in 2" 
                            class="flex w-full h-fit p-3 gap-3"
                            :class="idx !== 1 ? 'border-b-[1px] border-gray-200' : ''"
                            >
                            <div class="w-[60px] h-[60px] rounded-full overflow-hidden">
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
                </template>
                <template 
                    v-if="selected === 1">
                    <form
                        name="exam"
                        method="POST"
                        enctype="multipart/form-data"
                        @submit.prevent=""
                        class="w-full">
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
                                    class="w-14 h-14 font-thin text-gray-300"
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
                </template>
            </div>
        </div>
    </UModal>
    <UModal 
        v-model="isOpenMap"
        :ui="{
            width: 'w-1/2 sm:max-w-1/2 max-h-[90vh]',
        }">
        <div 
            class="w-full h-full overflow-auto bg-white rounded-md ">
            <div class="w-full flex p-2 justify-between items-center border-b-[1px] border-gray-200">
                <h3>
                    Google Map
                </h3>
                <UIcon
                    name="material-symbols:close-rounded"
                    class="w-7 h-7 text-black font-thin hover:scale-110 transition cursor-pointer"
                    @click="() => {
                        openMap(Boolean(false));
                    }"/>
            </div>
        </div>
    </UModal>
</template>

<script setup lang="ts">
import type { 
   Items 
} from '~/models/type';
import { 
    useRoute 
} from 'vue-router';

/**
* Begin::Set event trigger to parent component
*/
const route = useRoute();
const props = withDefaults(defineProps<{
    data: any,
}>(),{
    data: () => []
});
const emit = defineEmits<{
 (event: 'updateCart', data: Items[]): void;
 (event: 'updateFilters', data: Items): void;
}>();
/**
* End::Set event trigger to parent component
*/

/**
 * Begin: declare variable section
*/
const ratingBreakdown = [
    { label: 'excellent', count: 1000, color: 'bg-green-500' },
    { label: 'good', count: 300, color: 'bg-blue-400' },
    { label: 'average', count: 185, color: 'bg-yellow-400' },
    { label: 'below average', count: 82, color: 'bg-orange-400' },
    { label: 'poor', count: 100, color: 'bg-red-500' },
];
const isOpenReview: Ref<boolean> = ref<boolean>(false);
const rating: Ref<number> = ref<number>(4.9);
const isExpanded: Ref<boolean> = ref<boolean>(false);
const totalRatings = ratingBreakdown.reduce((sum, item) => sum + item.count, 0);
const isOpenMap: Ref<boolean> = ref<boolean>(false);
const selected: Ref<number> = ref<number>(0);
const userRating: Ref<number> = ref<number>(0);
const ratingStatus: Ref<any> = ref<any>({})
const tabs: Ref<any[]> = computed(() => [
    {
        label: 'Reviews and Rating'
    },
    {
        label: "Write a Review and Rating"
    }
]);
/**
 * End: declare variable section
 */

/**
 * Begin: Some logical
 */
const openReview = (value: boolean) => {
    isOpenReview.value = value as boolean;
}
const openMap = (value: boolean) => {
    isOpenMap.value = value as boolean;
}

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

/**
 * End: Some logical
 */

</script>
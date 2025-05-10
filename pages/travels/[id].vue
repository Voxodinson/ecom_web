<template>
    <div 
        class="w-full flex mt-[100px] flex-col items-center justify-center">
        <div 
            class="w-[90%] h-fit">
            <UButton
                @click.prevent="$router.back()"
                variant="soft"
                color="white"
                class=" group border border-sky-400 text-sky-400 text-[1rem] hover:underline cursor-pointer">
                <UIcon  
                    name="material-symbols-light:arrow-back-ios-new-rounded"
                    class="w-5 h-5  group-hover:-translate-x-2 transition">
                </UIcon>
                Back
            </UButton>
        </div>
        <div 
            class="w-[90%] h-fit">
            <div 
                class="w-full grid grid-cols-[80%_20%] py-3">
                <div class="w-full">
                    <h1
                        class=" font-semibold text-[1.3rem]">
                        Angkor Wat Temple
                    </h1>

                    <span
                        class="text-[.7rem] flex gap-1 left-3 items-center text-gray-400">
                        <UIcon
                            name="mdi:earth"
                            class="w-3.5 h-3.5 text-gray-300"/>
                            10-5-2025 12:45:00
                    </span>
                    <div 
                        class="w-full py-3">
                        <p
                            class="text-[.9rem] text-gray-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officiis nisi corporis quidem a unde vero quis fuga asperiores quisquam!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officiis nisi corporis quidem a unde vero quis fuga asperiores quisquam!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officiis nisi corporis quidem a unde vero quis fuga asperiores quisquam!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam officiis nisi corporis quidem a unde vero quis fuga asperiores quisquam!
                            <span
                                class="text-sky-400 text-[.9rem]">
                                See more
                            </span>
                        </p>
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
                    class="w-full h-full grid grid-cols-2 gap-6">
                    <div 
                        class="w-full rounded-md overflow-hidden">
                        <img 
                            :src="images[0]" 
                            alt="image"
                            class="w-full h-full object-cove hover:scale-110 transition cursor-pointer">
                    </div>
                    <div 
                        class="w-full grid grid-cols-2 grid-rows-2 gap-3">
                        <div
                            v-for="(image, idx) in images.splice(1, 4)" 
                            :key="idx"
                            class="w-full h-full relative rounded-md overflow-hidden group ">
                            <img 
                                :src="image" 
                                alt="image"
                                class="w-full h-full object-cover group-hover:scale-110 transition cursor-pointer">
                            <div 
                                v-if="idx === images.slice(1, 5).length - 1 && images.length > 5"
                                class="w-full h-full flex items-center justify-center absolute top-0 left-0 inset-0 bg-black/50 backdrop-blur-xs">
                                <span
                                    class="text-white text-[2rem] font-thin z-30">
                                    +{{ images.length }}
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
                    class="w-full"/>
                <template
                    v-if="selected === 0">
                    1
                </template>
                <template
                    v-if="selected === 1">
                    2
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
                class="w-full my-6">
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
    <div 
        class="w-full px-6 border-t-[1px] border-gray-200 py-3">
        <h3
            class="text-[1.2rem] font-semibold py-2">
            You Might Also Like
        </h3>
        <div 
            class="w-full grid grid-cols-4 gap-3">
            <TravelCard
                :data="dataRecommend"/>
        </div>
    </div>
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
    TravelCard
} from "~/components/ui";
import { 
    useRoute 
} from 'nuxt/app';

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
const route = useRoute();
const productId = route.params.id;
const data: Ref<any> = ref<any>({});
const dataRecommend: Ref<any> = ref<any>({});
const images: any = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
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
        label: "Location"
    },
    {
        label: "Reviews"
    },
    {
        label: "FAQs"
    }
]);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical section
 */

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

onMounted(async (): Promise<void> => {
    await fetchData();
    await fetchRecommend();
})
</script>
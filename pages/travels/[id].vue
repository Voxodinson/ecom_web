<template>
    <div
        class="my-[100px] px-6 w-full grid grid-cols-2 gap-6 h-fit">
        <div 
            class="flex w-full items-start justify-start">
            <div class="w-full h-[75vh] rounded-md overflow-hidden">
                <img 
                    :src="items[activeIndex]" 
                    class="w-full h-full" 
                    draggable="false">
            </div>
            <div 
                class="flex w-[80px] items-center h-[75vh] flex-col overflow-auto gap-2">
                <div class="w-fit h-fit flex flex-col gap-2 ">
                    <div
                        v-for="(item, idx) in items" 
                        :key="idx"
                        @click="changeSlide(idx)"
                        class="w-[60px] h-[60px] rounded-md overflow-hidden border-[2px] transition"
                        :class="activeIndex === idx ? 'border-blue-500' : 'border-blue-100'">
                        <img 
                            :src="item" 
                            class="w-full h-full hover:scale-110 transition">
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="w-full h-full ">
            <div 
                class="w-full h-fit flex flex-col gap-2 border-b-[1px] border-gray-200">
                <h3
                    class="font-semibold capitalize text-[1.2rem]">
                    {{ data.title }}
                </h3>
                <p
                    v-for="i in 4"
                    class="text-gray-400">
                    {{ data.description }}
                </p>
                <div class="flex items-center justify-between">
                    <div 
                        class="flex items-center" 
                        v-if="rating">
                        <UIcon
                            v-for="i in Math.floor(rating)"
                            :key="'full-' + i"
                            name="material-symbols:star-rounded"
                            class="w-6 h-6 text-yellow-500"/>
                        <UIcon
                            v-if="rating % 1 !== 0"
                            name="material-symbols:star-half-rounded"
                            class="w-6 h-6 text-yellow-500"/>
                        <UIcon
                            v-for="i in 5 - Math.ceil(rating)"
                            :key="'empty-' + i"
                            name="material-symbols:star-outline-rounded"
                            class="w-6 h-6 text-gray-400"/>
                        <span
                            class="mt-0.5 pl-2">
                            {{ data.rating.count }} reviews
                        </span>
                    </div>
                    <ULink
                        to="https://www.google.com/maps"
                        target="__blank"
                        class="text-[.8rem] hover:underline transition ">
                        Show location on google map
                    </ULink>
                </div>
            </div>
            <div 
                class="w-full mt-6">
                <UButton 
                    color="white"
                    variant="solid"
                    icon="material-symbols:favorite-outline-rounded"
                    class="w-full text-black rounded-full flex items-center justify-center py-3 mt-3">
                    Favorite
                </UButton>
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
const rating = computed(() => data.value?.rating?.rate || 0);
const route = useRoute();
const productId = route.params.id;
const data: Ref<any> = ref<any>({});
const dataRecommend: Ref<any> = ref<any>({});
const activeIndex: Ref<number> = ref<number>(0);
const activeColor: Ref<number> = ref<number>(0);
const activeSize: Ref<number> = ref<number>(0);
const items: any = [
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
const colors = [
    {
        color: 'red-400'
    },
    {
        color: 'blue-400'
    },
    {
        color: 'gray-400'
    },
    {
        color: 'pink-400'
    },
    {
        color: 'green-400'
    },
    {
        color: 'yellow-400'
    },
    {
        color: 'white'
    }
];
const sizes = [
    {
        size: 'SM'
    },
    {
        size: 'MD'
    },
    {
        size: 'LG'
    },
    {
        size: 'XL'
    },
    {
        size: '2XL'
    },
]
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical section
 */
 const changeSlide = (index: number) => {
    activeIndex.value = index;
};
const selectColor = (idx: number): void => {
    activeColor.value = idx as number;
}
const selectSize = (idx: number): void => {
    activeSize.value = idx as number;
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

onMounted(async (): Promise<void> => {
    await fetchData();
    await fetchRecommend();
})
</script>
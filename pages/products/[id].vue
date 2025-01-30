<template>
    <div
        class="mt-[100px] px-6 w-full flex gap-3 h-fit">
        <div 
            class="flex items-start justify-start">
            <UCarousel
                v-model="activeIndex"
                :items="items"
                :ui="{
                    item: 'basis-full bg-gray-300',
                    container: 'rounded-lg h-[500px] w-[500px]'
                }"
                arrows
                class="mx-auto">
                <img 
                    :src="items[activeIndex]" 
                    class="w-full" 
                    draggable="false">
            </UCarousel>
            <div 
                class="px-2 flex flex-col gap-2">
                <div
                    v-for="(item, idx) in items" 
                    :key="idx"
                     @click="changeSlide(idx)"
                    class="w-[60px] h-[60px] rounded-md overflow-hidden">
                    <img 
                        :src="item" 
                        class="w-full h-full hover:scale-110 transition">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    ContextAPI,
    SimpleAPI
} from "@/composable/apiHandler";
import type { 
    ResponseStatus,
    Items
} from '~/models/type';

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
/**
 * End::Declare variable object section
 */
/**
 * Begin::Declare variable section
 */

const route = useRoute();
const productId = route.params.id;
const data: Ref<Items> = ref<Items>({});
const activeIndex: Ref<number> = ref<number>(0)
const items: any = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
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
/**
 * End::Some logical section
 */

/**
 * Begin::Fetch data section
 */
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
/**
 * Begin::Fetch data section
 */

onMounted(async (): Promise<void> => {
    await fetchData();
})
</script>
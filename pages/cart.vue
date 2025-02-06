<template>
    
    <div
        class="w-full flex h-fit flex-col mt-[55px] pb-10 p-3 bg-white">
        <div 
            class="z-30">
            <UButton
                @click.prevent="$router.back()"
                variant="soft"
                color="white"
                class=" group text-[1rem] hover:underline cursor-pointer">
                <UIcon  
                    name="material-symbols-light:arrow-back-ios-new-rounded"
                    class="w-5 h-5  group-hover:-translate-x-2 transition">
                </UIcon>
                Back
            </UButton>
        </div>
        <div 
            class="flex items-center justify-start flex-col gap-4 mt-3">
            <div
                v-for="(item, idx) in data.splice(0, 3)" 
                :key="idx"
                class="w-[85%] grid grid-cols-[5%_20%_35%_20%_20%]  border-[1px] shadow-md border-gray-200 bg-gray-100 p-3 rounded-md ">
                <div 
                    class="flex items-center justify-start">
                    <UButton
                        size="sm"
                        color="white"
                        variant="soft"
                        class="p-0 ml-2">
                        <UIcon 
                            name="material-symbols:delete-outline" 
                            class="text-2xl text-red-500 hover:scale-110 transition" />
                    </UButton>
                </div>
                <div 
                    class="">
                    <ULink
                        :to="`/products/${item.id}`">
                        <div 
                            class="w-[150px] h-[150px] rounded-md border-gray-200 border-[1px] overflow-hidden">
                            <img 
                                :src="item.image" 
                                alt="image"
                                class="w-full h-full hover:scale-110 transition">
                        </div>
                    </ULink>
                </div>
                <div 
                    class="flex items-start justify-center gap-3 flex-col">
                    <h3>
                        {{ item.title }}
                    </h3>
                    <span
                        class="text-red-500 text-[1.2rem]">
                        $ {{ item.price }}
                    </span>
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
                            {{ item.rating.count }} reviews
                        </span>
                    </div>
                </div>
                <div 
                    class="flex items-center justify-center">
                    <div 
                        class="flex w-fit mt-2 items-center justify-center bg-white p-1 rounded-md gap-2">
                        <UButton
                            icon="ic:round-minus"
                            size="xl"
                            color="white"
                            square
                            variant="solid"
                            class="p-0.5 shadow-sm hover:bg-gray-200"/>
                        <span
                            class="text-[1.2rem]">
                            1
                        </span>
                        <UButton
                            icon="material-symbols:add-2-rounded"
                            size="xl"
                            color="white"
                            square
                            variant="solid"
                            class="p-0.5 shadow-sm hover:bg-gray-200"/>
                    </div>
                </div>
                <div 
                    class="flex items-center justify-center">
                    <span
                        class="text-red-500 text-[1.2rem]">
                        $ {{ item.price }}
                    </span>
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
const data: Ref<any> = ref<any>([]);
const rating = computed(() => {
  if (!data.value.length) return 0;
  
  const total = data.value.reduce((sum: number, item: any) => sum + (item.rating?.rate || 0), 0);
  return total / data.value.length;
});
/**
 * Begin::Fetch data section
 */
 const fetchData = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = `https://fakestoreapi.com/products`;
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
 * End::Fetch data section
 */
 onMounted(async (): Promise<void> => {
    await fetchData();
})
</script>
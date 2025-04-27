<template>
    <div 
        class="w-full h-[100vh]  relative">
        <img 
            src="https://t3.ftcdn.net/jpg/01/88/99/80/360_F_188998099_hHmWxOVrxDK3Fl7anQQtibt0aj52wqoU.jpg" 
            alt=""
            class="w-full h-full object-cover top-0 absolute z-10">
        <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center z-20">
            <div
                class="w-[80%] flex flex-col items-center justify-center gap-3">
                <h1
                    class="text-[3rem] capitalize font-bold text-white">
                    Embrace Serenity in every destination
                </h1>
                <p
                    class="text-center text-white text-[.8rem]">
                    No matter where life's journey takes you — from vibrant cities to peaceful retreats — true serenity comes from within. Embracing serenity means finding calm in every experience, appreciating each moment with gratitude and presence. Every destination holds the potential for peace if you approach it with an open heart. Our website helps make that journey easier by recommending user-friendly places designed for comfort, relaxation, and unforgettable memories. Whether you're seeking adventure or a quiet escape, we guide you to destinations that welcome you warmly. Serenity isn't just found — it’s created, wherever you go, and however you choose to travel.
                </p>
            </div>
            <div class="w-[70%] h-fit flex flex-col gap-3 mt-12 rounded-md backdrop-blur-md bg-white/70 p-3 ">
                <div class="w-full  rounded-md flex">
                    <UFormGroup
                        class="w-full"
                        label="Travel Spend Range ($)"
                        name="">
                        <div class="grid grid-cols-2 gap-3 w-full">
                            <UInput 
                                placeholder="From" 
                                class=" bg-gray-300 rounded-full"
                                size="lg"/>
                            <UInput 
                                placeholder="To" 
                                class=" bg-gray-300 rounded-full"
                                size="lg"/>
                        </div>
                    </UFormGroup>
                </div>
                <div 
                    class="w-full grid grid-cols-3 gap-3 rounded-md p-2 bg-white">
                    <UFormGroup
                        class="w-full"
                        label="Country"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a province"
                            class="w-full"/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Province"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a province"
                            class="w-full"/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Type"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a type"
                            class="w-full"/>
                    </UFormGroup>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex items-center flex-col  justify-center p-6 pb-0 mt-[55px]">
        <div 
            class="w-[90%] border-b-[1px] border-gray-300 flex justify-between items-center pb-2">
            <h3
                class="font-semibold text-[1.2rem] uppercase">
                Our Best Recommend To Visit
            </h3>
            <UButton
                :icon="isOpenFilter ? 'material-symbols:close-rounded' : 'material-symbols-light:tune'"
                size="md"
                color="white"
                @click="() => {
                    toggleFilter();
                }"
                class="bg-[#2973B2] text-white hover:text-black transition"/>
        </div>
        <div
            v-if="isOpenFilter"
            class="w-[90%] bg-gray-100 p-3 grid grid-cols-3 gap-3 rounded-md mt-3">
            <UFormGroup
                class="w-full"
                label="Country"
                name="">
                <SelectMenu
                    name=""
                    :options="[]"
                    option-attribute="name"
                    value-attribute="id"
                    id-attribute="id"
                    placeholder="select a country"
                    class="w-full"/>
            </UFormGroup>
            <UFormGroup
                class="w-full"
                label="Province"
                name="">
                <SelectMenu
                    name=""
                    :options="[]"
                    option-attribute="name"
                    value-attribute="id"
                    id-attribute="id"
                    placeholder="select a province"
                    class="w-full"/>
            </UFormGroup>
            <UFormGroup
                class="w-full"
                label="Type"
                name="">
                <SelectMenu
                    name=""
                    :options="[]"
                    option-attribute="name"
                    value-attribute="id"
                    id-attribute="id"
                    placeholder="select a type"
                    class="w-full"/>
            </UFormGroup>
        </div>
    </div>
    <div 
        class="w-full p-6 flex items-center justify-start flex-col border-b-[1px] border-gray-200">
        <div 
            class="w-[90%] grid grid-cols-3 gap-3">
            <TravelCard
                :data="data"/>
        </div>
        <div 
            class="w-full flex items-center justify-center mt-3">
            <UPagination
                size="sm"
                :total="_result.total || 0" 
                show-last 
                show-first
                @update:model-value="async (current_page: number): Promise<void> => {
                    await fetchData(current_page);
                }"
                v-model="page"
                :to="(page_no: number) => ({
                    query: {
                        page_no
                    }
                })"/>
        </div>
    </div>
    <div
        class="w-full flex flex-col items-center justify-center gap-3 px-6 mt-3">
        <div 
            class="w-full text-start">
            <h3
                class="text-[1.5rem] font-semibold">
                Best 4 places
            </h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat nihil. Ducimus quas tempora commodi alias corrupti facere deleniti labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint dolores corrupti ad numquam possimus illum quos praesentium accusamus eveniet.
            </p>
        </div>
        <div 
            class="w-full h-[40vh] grid-cols-[69%_30%] grid box-border gap-3 *:overflow-hidden">
            <div 
                v-for="item in items"
                class="w-full h-full bg-gray-500 rounded-md relative group">
                <img 
                    :src="item.image" 
                    alt=""
                    class="w-full h-full object-cover">
                <div 
                    class="w-full group-hover:flex h-full absolute top-0 hidden justify-end p-3 flex-col left-0 bg-white bg-opacity-40">
                    <h3
                        class="text-[1.2rem] font-bold ">
                        {{ item.title }}
                    </h3>
                    <p
                        class="text-[.9rem] ">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
        <div 
            class="w-full h-[40vh] grid-cols-[30%_69%] grid box-border gap-3 *:overflow-hidden">
            <div 
                v-for="item in items"
                class="w-full h-full bg-gray-500 rounded-md relative group">
                <img 
                    :src="item.image" 
                    alt=""
                    class="w-full h-full object-cover">
                <div 
                    class="w-full group-hover:flex h-full absolute top-0 hidden justify-end p-3 flex-col left-0 bg-white bg-opacity-40">
                    <h3
                        class="text-[1.2rem] font-bold ">
                        {{ item.title }}
                    </h3>
                    <p
                        class="text-[.9rem] ">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import {
    SelectMenu,
    TravelCard
} from '~/components/ui';
import {
    ContextAPI,
    SimpleAPI
} from "@/composable/apiHandler";
import type {
    ResponseStatus
} from '~/models/type';

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
const data: Ref<any> = ref<any>([]);
const _result: Ref<any> = ref<any>({});
const isOpenFilter: Ref<boolean> = ref<boolean>(false);
const page: Ref<number> = ref<number>(1);
const items = [
  {
    image: 'https://t3.ftcdn.net/jpg/01/80/83/76/360_F_180837604_UyJZNTHPluIJNQJjmTkCpE4XLJ03Zott.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus voluptate consequuntur sed error! Adipisci nesciunt consequatur hic quia odio, numquam nemo.'
  },
  {
    image: 'https://t3.ftcdn.net/jpg/01/80/83/76/360_F_180837604_UyJZNTHPluIJNQJjmTkCpE4XLJ03Zott.jpg',
    title: 'Another example title',
    description: 'More description text here for the second item.'
  }
];
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical section
 */
 const toggleFilter = (): void => {
    isOpenFilter.value = !isOpenFilter.value
}
/**
 * End::Some logical section
 */ 

/**
 * Begin::Fetch data section
 */
 const fetchData = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = 'https://fakestoreapi.com/products';
    if(search)
    {
        url += `&search=${search}`;
    }
    const result: ResponseStatus = await api.get(url) as ResponseStatus;
    if(!result.error)
    {
        data.value = result as any;
    }
}
/**
 * Begin::Fetch data section
 */

onMounted(async (): Promise<void> => {
    await fetchData();
})
</script>
<template>
    <div 
        class="w-full h-[70vh] relative">
        <div class="h-full">
            <img 
                src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="bg image"
                class="w-full h-full object-cover">
        </div>
        <div 
            class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div 
                class="w-full h-full bg-black/30 mix-blend-multiply"></div>
        </div>
        <div class=" absolute -bottom-3 left-3 flex flex-col ">
            <span
                class="text-[100px] leading-6 text-sky-400 space-x-0 tracking-tight font-bold uppercase">
                Camtour
            </span>
            <span
                class="text-[100px] font-bold uppercase tracking-tight text-white">
                Recommend Shop
            </span>
        </div>
    </div>
    <div
        class="w-full flex flex-col items-center justify-center overflow-x-auto gap-3">
        <div class="w-full overflow-hidden">
            <div class="scroll-wrapper group">
                <div class="scroll-track group-hover:[animation-play-state:paused]">
                    <div
                        v-for="i in 20" 
                        :key="i"
                        class="w-[250px] h-[150px] relative rounded-md flex-shrink-0">
                        <img
                            src="https://logos-world.net/wp-content/uploads/2024/04/Decathlon-Logo-New-500x281.png"
                            alt="image"
                            class="w-full h-full hover:scale-110 transition" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div 
        class="w-full h-fit mt-6 flex items-center justify-center">
        <div 
            class="w-[90%] h-full flex flex-col items-center justify-center">
            <h3 
                class="text-[1.7rem] text-center font-semibold">
                We provide high-quality travel products designed to make your journeys easier, more comfortable, and stress-free.
            </h3>
            <p
                class="text-center text-[.9rem] text-gray-400">
                We provide high-quality travel products designed to make your journeys easier, more comfortable, and stress-free — from durable luggage and compact organizers to travel pillows, adaptors, and accessories that enhance every step of your trip. Whether you're traveling for business or leisure, our carefully curated items ensure convenience, style, and reliability wherever you go.
            </p>
        </div>
    </div>
    <div
        class="mt-[55px] w-full p-6 flex flex-col items-center justify-center">
        <div 
            class="w-full border-b-[1px] border-gray-300 flex justify-between items-center">
            <h3
                class="font-semibold text-[1.2rem] uppercase">
                Products
            </h3>
        </div>
        <div
            class="w-full grid grid-cols-[29%_70%] gap-3">
            <div 
                class=" rounded-md sticky top-3 bg-gray-100 mt-3 p-3 h-fit">
                <span
                    class="font-medium">
                    Filter by Select
                </span>
                <div 
                    class="mt-2 p-2 bg-white rounded-md flex flex-wrap gap-1">
                    <UFormGroup
                        class="w-full"
                        label="Brand"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a brand"
                            class="w-full"/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Color"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a color"
                            class="w-full"/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-full"
                        label="Best For"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a best fir"
                            class="w-full"/>
                    </UFormGroup>
                </div>
                <div 
                    class="py-2">
                    <span
                        class="font-medium">
                        Filter by Type
                    </span>
                    <div 
                        class="mt-2 p-2 bg-white rounded-md flex flex-wrap gap-2">
                        <UButton
                            v-for="i in 4"
                            size="sm"
                            color="white"
                            label="Home"
                            class="bg-gray-100 shadow-sm hover:bg-sky-400 hover:text-white transition"/>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col">
                <div 
                    class="w-full grid grid-cols-3 gap-3 mt-3 ">
                    <ProductCard
                        v-for="i in 10"
                        :data="data.data"/>
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
        </div>
    </div>
    
    <div class="w-full flex mt-6 px-6 items-center justify-center">
        <div 
            class="w-full  h-fit grid grid-cols-2 gap-3">
            <div 
                class="w-full rounded-md h-[250px] overflow-hidden">
                <img 
                    src="https://i.pinimg.com/474x/7b/46/99/7b469939a08887387745a69ee03299ef.jpg" 
                    alt=""
                    class="w-full h-full object-cover">
            </div>
            <div 
                class="h-[250px] w-full grid grid-cols-3 grid-rows-2 gap-3 bg-gray-100 p-3 rounded-md">
                <div 
                    v-for="i in 6"
                    class="w-full flex items-center justify-between bg-white rounded-md p-3">
                    <div class="">
                        <h3
                            class="text-[.9rem] font-semibold">
                            Macbook Air
                        </h3>
                        <span
                            class="text-red-400 text-[.8rem]">
                            73 items
                        </span>
                    </div>
                    <div 
                        class="w-[80px] h-[80px]">
                        <img 
                            src="https://i.pinimg.com/474x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg" 
                            alt=""
                            class="w-full h-full object-cover">
                    </div>
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
    Tab,
    ResponseStatus,
    Items,
    Options
} from '~/models/type';
import { 
    SelectMenu,
    ProductCard 
} from "~/components/ui";
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
const data: Ref<any> = ref<any>({});
const _result: Ref<any> = ref<any>({});
const page: Ref<number> = ref<number>(1);
const dataOptions: Ref<Options> = ref<Options>({});
const isOpenFilter: Ref<boolean> = ref<boolean>(false);
const timeout: Ref<NodeJS.Timeout | null> = ref<NodeJS.Timeout | null>(null);
const filters: Ref<Items> = ref<Items>({
    status_id: '',
    warehouse_id: ''
});
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
    let url: string = `products?page&per_page&search`;
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


const searchData = async (value: string): Promise<void> => {
    if(timeout.value)
    {
        clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(async (): Promise<void> => {
        await fetchData(1, value);
    }, 250);
}

const fetchOption = async (): Promise<void> => {
    const options: ResponseStatus = await api.get("setting/form/product") as ResponseStatus;
    if(!options.error)
    {
        dataOptions.value = options.data as unknown as Options;
    }
    console.log(dataOptions.value)
};

const filterData = async (current_page: number = 1): Promise<void> => {
    const per_page: number = 10;
    const url: string = `package?per_page=${per_page}&page_no=${current_page}&status_id=${filters.value.status_id}&warehouse_id=${filters.value.warehouse_id}`;
    const result: ResponseStatus = await api.get(url, false) as ResponseStatus;
    if(!result.error)
    {
        data.value = result as object;
    }
}
/**
 * Begin::Fetch data section
 */

onMounted(async (): Promise<void> => {
    await fetchData();
})
</script>

<style lang="css" scoped>
.scroll-wrapper {
    width: 100%;
    overflow: hidden;
}

.scroll-track {
    display: flex;
    gap: 32px;
    width: max-content;
    animation: scroll-left 50s linear infinite;
}

@keyframes scroll-left {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>
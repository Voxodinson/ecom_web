<template>
    <div
        class="mt-[55px] w-full p-6 flex flex-col items-center justify-center">
        <div 
            class="w-full border-b-[1px] border-gray-300 flex justify-between items-center pb-2">
            <h3
                class="font-semibold text-[1.2rem] uppercase">
                Products
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
            class="w-full bg-gray-100 p-3 rounded-md mt-3">
            <div>
                <span
                    class="font-medium">
                    Filter by Color
                </span>
                <div 
                    class="mt-2 p-2 bg-white rounded-md flex flex-wrap gap-1">
                    <UFormGroup
                        class="w-[calc(99%/3)]"
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
                        class="w-[calc(99%/3)]"
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
                        class="w-[calc(99%/3)]"
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
            </div>
            <div class="py-2">
                <span
                    class="font-medium">
                    Filter by Type
                </span>
                <div 
                    class="mt-2 p-2 bg-white rounded-md flex flex-wrap gap-2">
                    <UButton
                        v-for="i in 10"
                        size="sm"
                        color="white"
                        label="Home"
                        class="bg-gray-100 shadow-sm hover:bg-blue-400 hover:text-white transition"/>
                </div>
            </div>
        </div>
        <div 
            class="w-full grid grid-cols-4 gap-3 py-3 mt-3 bg-gray-100 border-[1px] border-gray-200 rounded-md p-3">
            <ProductCard
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
const data: Ref<object> = ref<object>({});
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
    let url: string = `products`;
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
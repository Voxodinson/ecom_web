<template>
    <div
        class="w-full relative flex h-fit flex-col mt-[55px] pb-10 p-3 bg-white">
        <div 
            class="mt-6">
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
            class="w-full px-3 flex items-start justify-start gap-4 mt-3">
            <div class="w-[60%] h flex flex-col gap-3">
                <div
                    v-for="(item, idx) in data" 
                    :key="idx"
                    class="w-full grid grid-cols-[5%_20%_40%_30%_5%]  border-[1px] shadow-md border-gray-200 bg-gray-100 p-3 rounded-md ">
                    <div 
                        class="flex items-center justify-start">
                        <UCheckbox
                            input-class="w-5 h-5"
                            :model-value="item.checked"
                            @click="() => toggleCheck(item)"
                            />
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
                        <div 
                            class="flex items-center" 
                            v-if="item.rating.rate">
                            <UIcon
                                v-for="i in Math.floor(item.rating.rate)"
                                :key="'full-' + i"
                                name="material-symbols:star-rounded"
                                class="w-6 h-6 text-yellow-500"/>
                            <UIcon
                                v-if="item.rating.rate % 1 !== 0"
                                name="material-symbols:star-half-rounded"
                                class="w-6 h-6 text-yellow-500"/>
                            <UIcon
                                v-for="i in 5 - Math.ceil(item.rating.rate)"
                                :key="'empty-' + i"
                                name="material-symbols:star-outline-rounded"
                                class="w-6 h-6 text-gray-400"/>  
                            <span
                                class="mt-0.5 pl-2">
                                {{ item.rating.count }} reviews
                            </span>
                        </div>
                        <span
                            class="text-red-500 text-[1.2rem]">
                            $ {{ item.price }}
                        </span>
                    </div>
                    <div 
                        class="flex items-center justify-center">
                        <span
                            class="text-red-500 text-[1.2rem]">
                            $ {{ item.price }}
                        </span>
                    </div>
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
                </div>
            </div>

            <div 
                class="w-[40%] h-fit bg-gray-100 rounded-md sticky top-2">
                <div 
                    class="z-30 w-full h-[50px] p-3 border-b-[1px] border-gray-200 flex items-center justify-between left-0">
                    <h3
                        class="text-black font-semibold">
                        About to checkouts
                    </h3>
                </div>
                <div 
                    class="h-full w-full overflow-auto">
                    <div
                        class="w-full h-fit p-2 flex flex-col gap-2 items-start justify-start overflow-y-auto">
                        <div 
                            v-for="(item, idx) in cartItems"
                            :key="idx"
                            class="w-full flex justify-between gap-3 border-[1px] bg-white rounded-md border-gray-200 py-2 px-2">
                            <div class="w-fit flex gap-3">
                                <div 
                                    class="w-[100px] h-[100px] rounded-md border-gray-200 overflow-hidden border-[1px]">
                                    <img 
                                        :src="String(item.image as string)" 
                                        alt="item image" 
                                        class="w-full h-full object-cover">
                                </div>
                                <div
                                    class="w-[300px]">
                                    <h3 class=" line-clamp-1 text-ellipsis">
                                        {{ item.title }}
                                    </h3>
                                    <p 
                                        class="text-[.7rem] line-clamp-1 text-ellipsis text-gray-400">
                                        {{ item.description }}
                                    </p>
                                    <div 
                                        class="flex w-fit mt-2 items-center justify-center bg-gray-100 p-1 rounded-md gap-2">
                                        <UButton
                                            icon="ic:round-minus"
                                            size="sm"
                                            color="white"
                                            square
                                            variant="solid"
                                            class="p-0.5 shadow-sm hover:bg-gray-200"/>
                                        <span>
                                            1
                                        </span>
                                        <UButton
                                            icon="material-symbols:add-2-rounded"
                                            size="sm"
                                            color="white"
                                            square
                                            variant="solid"
                                            class="p-0.5 shadow-sm hover:bg-gray-200"/>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[50px] flex items-end flex-col justify-between">
                                <UIcon 
                                    name="solar:trash-bin-minimalistic-outline" 
                                    class="text-[1.5rem] text-red-500 hover:scale-125 cursor-pointer transition-all ease-in-out duration-100"
                                    @click="()=>{
                                        toggleCheck(item)
                                    }"/>
                                <span 
                                    class="text-red-500">
                                    <span 
                                        class="text-gray-600">
                                        $
                                    </span>
                                    {{ item.price }}
                                </span>
                            </div>
                        </div>
                        <div
                            class="w-full full flex flex-col items-center mt-3"
                            v-if="!cartItems[0]">
                            <img 
                                src="" 
                                alt=""
                                class="w-[150px] opacity-50">
                            <span
                                class="text-[.8rem] uppercase text-red-400">
                                No Items Found...!
                            </span>
                        </div>
                        <div 
                            class="w-full h-fit p-2 bg-white rounded-md">
                            <div 
                                class="w-full p-2 flex flex-col *:w-full *:flex *:justify-between *:py-1">
                                <h3 
                                    class="font-semibold text-[1.2rem] border-none">
                                    Payment Summary
                                </h3>
                                <div
                                    class="px-2 border-b-[1px] border-gray-200">
                                    <span>Sub Total:</span>
                                    <span>${{ calculate.subTotalPrice }}</span>
                                </div>
                                <div
                                    class="px-2">
                                    <span>Total:</span>
                                    <span>${{ calculate.total }}</span>
                                </div>
                            </div>
                            <UButton
                                size="lg"
                                color="sky"
                                label="Place Purchase"
                                variant="solid"
                                @click="async (): Promise<void> => {
                                }"
                                class="w-full text-center flex items-center bg-gradient-to-r from-blue-500 to-[#07497f] justify-center py-2"/>
                        </div>
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
import { 
    ref, 
    onMounted
} from 'vue';
import {
    GetDataContext,
    GetDataNormalForm
} from "@/composable/dataHandler";
import type { 
    ResponseStatus,
    Items
} from '~/models/type';

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
const data: Ref<any> = ref<any>([]);
const cartItems: Ref<Items[]> = ref<Items[]>([]);
const calculate: Ref<Items> = ref<Items>({
    subTotalPrice: 0,
    tax: 0,
    taxPercent: 0,
    total: 0
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
    const result: any = await api.get(url) as any;
    if(!result.error)
    {
        data.value = (result as any).map((item: any) => ({
            ...item,
            checked: false
        }));
        console.log(data.value)
    }
}

/**
 * End::Fetch data section
 */

/**
 * Begin::Some Logical section
 */
 const toggleCheck = (item: any) => {
    item.checked = !item.checked;

    if (item.checked) {
        cartItems.value.push(item);
    } else {
        cartItems.value = cartItems.value.filter((cartItem: any) => cartItem.id !== item.id);
    }
};

/**
 * End::Some Logical section
 */

onMounted(async (): Promise<void> => {
    await fetchData();
});
</script>
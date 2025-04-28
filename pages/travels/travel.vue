<template>
    <div 
        class="w-full h-[100vh] relative">
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
    <div 
        class="w-full h-fit mt-6 flex items-center justify-center">
        <div 
            class="w-[90%] h-full flex items-center justify-between p-3 bg-gradient-to-r from-sky-100 to bg-sky-400 rounded-md">
            <h3>
                Been somewhere amazing? Share it with our community!
            </h3>
            <div 
                class="w-fit flex gap-3">
                <UButton 
                    size="md" 
                    color="white" 
                    variant="solid" 
                    class="w-[50px] h-[50px] text-sky-400 flex hover:bg-gray-100 group transition items-center justify-center">
                    <UIcon
                        name="solar:history-linear"
                        class="w-7 h-7 group-hover:scale-110 transition"/>
                </UButton>
                <UButton 
                    size="md" 
                    color="white" 
                    variant="solid" 
                    class="w-[50px] h-[50px] text-sky-400 flex hover:bg-gray-100 group transition items-center justify-center">
                    <UIcon
                        name="material-symbols:add-circle-outline"
                        class="w-7 h-7 group-hover:scale-110 transition"/>
                </UButton>
            </div>
        </div>
    </div>
    <div class="w-full flex items-center justify-center mt-6">
        <div class="w-[90%] flex relative items-center gap-6 h-fit justify-center p-3 rounded-md overflow-hidden">
            <div 
                class="flex h-full w-full items-center absolute top-0 left-0 flex-col justify-start">
                <p
                    class="mt-16 capitalize text-sky-400">
                    Wonderful Place for you!
                </p>
                <h3
                    class="font-bold text-[2rem]">
                    Travel Categories
                </h3>
            </div>
            <div
                v-for="(item, idx) in travelCatrgories"
                :key="idx"
                :class="{
                    'mt-[100px]': idx === 1 || idx === 4,
                    'mt-[200px]': idx === 2 || idx === 3
                }"
                class="w-[150px] h-[150px] relative rounded-md overflow-hidden group">
                <img 
                    :src="item.image" 
                    alt=""
                    class="w-full h-full object-cover group-hover:scale-110 transition cursor-pointer">
                <h3
                    class=" absolute bottom-0 text-shadow left-1 text-white">
                    {{ item.name }}
                </h3>
            </div>
        </div>
    </div>
    <div 
        class="w-full h-fit mt-6 flex items-center justify-center">
        <div 
            class="w-[90%] h-full flex flex-col items-center justify-center">
            <h3 
                class="text-[1.2rem] font-semibold">
                Endless destinations, unforgettable experiences — the city that never stops inspiring.
            </h3>
            <p
                class="text-center text-[.9rem] text-gray-400">
                A city full of wonders, where every street leads to a new adventure. From iconic 
                landmarks and rich cultural sites to hidden gems and vibrant neighborhoods, this city offers countless destinations 
                to explore. Whether you're seeking historic architecture, breathtaking natural beauty, l
                ively markets, or world-class dining, there's always something new waiting around every corner.
            </p>
        </div>
    </div>
    <div class="w-full h-[400px] mt-6 flex items-center justify-center">
        <div class="w-[90%] h-full grid grid-cols-[24%_24%_50%] gap-3 group">
            <div
                v-for="(item, idx) in cityItem" 
                :key="idx"
                class="h-full relative bg-blue-500 rounded-md overflow-hidden ">
                <img 
                    :src="item.image" 
                    alt="province image"
                    class="w-full h-full object-cover hover:scale-110 transition cursor-pointer">
                <div 
                    class="w-full absolute bottom-0 left-0 flex flex-col p-3 items-start justify-center">
                    <h3
                        class=" text-white text-[1.2rem] font-semibold capitalize">
                        {{ item.name }}
                    </h3>
                    <span
                        class="text-white flex items-center gap-2">
                        <UIcon
                            name="material-symbols:location-on-outline"
                            class="w-7 h-7 text-white"/>
                        {{ item.total_des }} Destinations
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex items-center flex-col  justify-center p-3  pb-0 mt-[55px]">
        <div 
            class="w-[91%] border-b-[1px] border-gray-300 flex justify-between items-center pb-2">
            <h3
                class="font-semibold">
                Recommended by our community — don't miss this place!
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
            class="w-[91%] bg-gray-100 p-3 grid grid-cols-3 gap-3 rounded-md mt-3">
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
        class="w-full p-3 flex items-center justify-center flex-col border-b-[1px] border-gray-200">
        <div 
            class="w-[91%] grid grid-cols-3 gap-3">
            <TravelCard
                :data="data"/>
        </div>
        <div 
            class="w-[90%] flex items-center justify-center mt-3">
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


const cityItem: Ref<any> = ref<any>([
    {
        name: "Battambang",
        image: "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/a_statue_of_lok_ta_dambang_kronhung_at_his_namesake_roundabout_on_national_road_5_in_battambang_town._yousos_apdoulrashim.jpg",
        total_des: 14,
    },
    {
        name: "Kampot",
        image: "https://kampot.city/images/seahorse.webp",
        total_des: 21,
    },
    {
        name: "Siem Reap",
        image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeQ5-XGLhqCIBS7OB3KrGKgJ3v2p2r2Q2NRRrv_Tab8hllCtlxoGGDqLdkWd3rG8jhqWWadanmWjuK-eWE_-jqqCGZY6qA74hvp9dq093hyMFr1oO5BAJO0ftYPCOkq0_aQe7M3lA?key=r3ZKxBHcz-370hdrCiAq81oV",
        total_des: 42,
    }
]);

const travelCatrgories: Ref<any> = ref<any>([
    {
        image: "https://media.istockphoto.com/id/1369171053/fr/photo/un-groupe-de-sportifs-se-prom%C3%A8ne-dans-les-montagnes-au-coucher-du-soleil-avec-des-sacs-%C3%A0-dos.jpg?s=612x612&w=0&k=20&c=ck1JqLTO0dyGayRvV8YMLL4Ebmnc_hPZ6SMXMylZcLE=",
        name: "Adventure Travel",
        url: ""
    },
    {
        image: "https://media.istockphoto.com/id/1457724042/fr/photo/famille-asiatique-heureuse-qui-aime-les-activit%C3%A9s-de-plage-pendant-les-vacances-d%C3%A9t%C3%A9-parents.jpg?s=612x612&w=0&k=20&c=V3UTbLLc0lj6cFnhrBrcYxx5i5I7OuBi_ojqh-xtYb4=",
        name: "Family Vocations",
        url: ""
    },
    {
        image: "https://media.istockphoto.com/id/1442179368/fr/photo/%C3%AEle-des-maldives.jpg?s=612x612&w=0&k=20&c=E_366pJcRf8Psb_S9vnXax3dsarTAqXEkTT8jhRBB0s=",
        name: "Beach Gateway",
        url: ""
    },
    {
        image: "https://media.istockphoto.com/id/1256296335/fr/photo/un-couple-romantique-sur-les-vacances-d%C3%A9t%C3%A9-enjos-le-coucher-du-soleil-sur-la-mer.jpg?s=612x612&w=0&k=20&c=HKqV2IgM3bvUBEoWZgdRjFmOvrNa0lW-DQXJpFWbM3c=",
        name: "Luxury Escapes",
        url: ""
    },
    {
        image: "https://media.istockphoto.com/id/504122496/fr/photo/angkor-wat.jpg?s=612x612&w=0&k=20&c=7KEf54iVjR6eQ1PnOW43y0Y3neFq5s95acDSujKO140=",
        name: "Culture",
        url: ""
    },
    {
        image: "https://media.istockphoto.com/id/165088112/fr/photo/randonn%C3%A9e-famille-sur-le-v%C3%A9hicule-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=vpS4z4uU_lahlpBmrwQO3toUp9JvFFy62U6y20Vu1ck=",
        name: "Wildlife",
        url: ""
    }
]);
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
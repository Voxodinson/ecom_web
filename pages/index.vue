<template>
    <div 
        class="w-full h-[100vh] relative shadow-md">
        <img 
            :src="switchSrc" 
            alt=""
            class="w-full h-full">
        <div 
            class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div 
                class="w-full h-full bg-black/50 mix-blend-multiply"></div>
        </div>
        <div 
            class="w-full h-full flex items-center justify-center absolute top-0 left-0">
            <div 
                class="flex items-center justify-center flex-col">
                <div class="overflow-hidden w-[100px] h-fit">
                    <img 
                        :src="PinIcon" 
                        alt="logo"
                        class="w-full h-full object-cover">
                </div>
                <h3
                    class="text-[1.2rem] font-semibold text-white mt-3">
                    Discover top travel recommendations and the most popular places to visit.
                </h3>
                <p
                    class="w-[80%] text-white text-center">
                    Discover top travel recommendations and the most popular places to visit with our platform. Whether you're planning your next getaway or exploring hidden gems nearby, we curate the best destinations based on real experiences and up-to-date trends. From iconic landmarks to off-the-beaten-path adventures, let us guide you to unforgettable places worth visiting.
                </p>
                <ULink
                    to="/products/product"
                    class="bg-white bg-opacity-50 py-1.5 mt-6 text-white rounded-full px-10 hover:px-20 transition">
                    Explore our website
                </ULink>
            </div>
        </div>
        <div 
            class="h-full flex items-center justify-center flex-col gap-3 absolute top-0 right-3">
            <div 
                v-for="(item, idx) in backgrounImage"
                :key="idx"
                @click="(): void => {
                    switchBackground(idx);
                    console.log(activeIdx)
                }"
                :class="activeIdx === idx ? 'border-[2px] border-white' : ''"
                class="h-[60px] w-[60px] rounded-md overflow-hidden cursor-pointer relative bg-white shadow-md group">
                <img 
                    :src="item" 
                    alt="image"
                    class="w-full h-full object-cover hover:scale-110 transition ">
            </div>
        </div>
        <div 
            class="w-full flex items-center justify-center absolute bottom-[-80px]">
            <div 
                class=" w-[60%] h-fit grid grid-cols-2 gap-3">
                <div 
                    v-for="(item, idx) in main_card"
                    :key="idx"
                    class="w-full h-[200px] rounded-md overflow-hidden relative bg-white shadow-md group">
                    <img 
                        :src="item.img" 
                        alt="image"
                        class="w-full h-full object-cover">
                    <ULink
                        :to="item.to" 
                        class="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 hidden group-hover:flex transition cursor-pointer items-center justify-center">
                        <h3
                            class="text-[1.2rem] font-semibold text-white">
                            {{ item.text }}
                        </h3>
                    </ULink>
                </div>
            </div>
        </div>
    </div>
    <div
        class="w-full h-fit  flex p-3 flex-col items-start justify-start mt-[130px]">
        <div 
            class="w-full h-fit flex flex-col justify-center items-center">
            <div 
                class="w-[80%] flex flex-col gap-6 items-center justify-center">
                <h3 
                    class="text-[1.5rem] font-semibold text-center">
                    Discover the World: Your Ultimate Travel Guide
                </h3>
                <p
                    class="text-center text-gray-500">
                    Traveling isn’t just about visiting new places—it’s about experiencing different cultures, meeting incredible people, and creating unforgettable memories. Whether you're backpacking through Europe, exploring tropical islands, or embarking on a road trip, having the right travel gear can make all the difference.
                </p>
                <p
                    class="text-center text-gray-500">
                    From breathtaking destinations and budget-friendly travel hacks to must-have travel products, our blog covers it all. We share expert tips on packing smart, choosing the best travel accessories, and finding gear that enhances your adventures—whether it’s a reliable backpack, noise-canceling headphones, or compact travel essentials.
                </p>
                <p
                    class=" text-gray-500  text-center">
                    Join us as we explore the world and discover the best tools to make your journey smoother, more enjoyable, and stress-free. Let’s wander, explore, and create memories—one destination at a time!
                </p>
            </div>
            <div class="flex w-full p-3 items-center justify-center flex-col py-6">
                <h3
                    class="text-[1.2rem] font-semibold py-2">
                    Most views location
                </h3>
                <div 
                    class="w-[90%] grid grid-cols-3 gap-3">
                    <TravelCard
                        :data="dataTravels.data"
                        v-for="i in 3"/>
                </div>
                <ULink
                    to="/travels/travel" 
                    class="text-black text-[.8rem] mt-3 hover:px-16 transition px-10 py-1 border-[1px] border-gray-400 rounded-md">
                    View more...
                </ULink>
            </div>
        </div>
        <div 
            class="w-full h-fit bg-white grid grid-rows-2 p-3 rounded-md mt-[60px]">
            <div 
                class="w-full flex gap-3">
                <div 
                    class="w-1/2 flex flex-col gap-3 mt-3">
                    <h3 
                        class="text-[1.2rem]">
                        Our Serve
                    </h3>
                    <p
                        class="text-[0.9rem] pl-4 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iste!
                    </p>
                    <p
                        class="text-[.8rem] text-gray-400 pl-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex nulla molestias. Quasi omnis obcaecati eligendi! Expedita reprehenderit, optio ea voluptate inventore corporis similique, laborum, deleniti harum eius ex iusto ipsa. Ad eius, ab eos distinctio at quasi est provident consequatur labore. Labore, dolore odit maiores rerum esse quam nihil!
                    </p>
                </div>
                <div 
                    class="w-1/2 h-[220px] grid grid-cols-3 gap-3">
                    <div
                        v-for="i in 3" 
                        class="w-full h-full bg-gray-400 rounded-md overflow-hidden">
                        <img 
                            src="https://i.pinimg.com/474x/ea/3a/0f/ea3a0f3c0cf4ee1840df81d789f6510a.jpg" 
                            alt=""
                            class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
            <div 
                class="w-full flex gap-3">
                <div 
                    class="w-1/2 h-[220px] grid grid-cols-3 gap-3">
                    <div
                        v-for="i in 3" 
                        class="w-full h-full bg-gray-400 rounded-md overflow-hidden">
                        <img 
                            src="https://i.pinimg.com/474x/ea/3a/0f/ea3a0f3c0cf4ee1840df81d789f6510a.jpg" 
                            alt=""
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div 
                    class="w-1/2 flex flex-col gap-3 mt-3">
                    <h3 
                        class="text-[1.2rem]">
                        Our Serve
                    </h3>
                    <p
                        class="text-[0.9rem] pl-4 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iste!
                    </p>
                    <p
                        class="text-[.8rem] text-gray-400 pl-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex nulla molestias. Quasi omnis obcaecati eligendi! Expedita reprehenderit, optio ea voluptate inventore corporis similique, laborum, deleniti harum eius ex iusto ipsa. Ad eius, ab eos distinctio at quasi est provident consequatur labore. Labore, dolore odit maiores rerum esse quam nihil!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { 
    ProductCard,
    TravelCard
} from '~/components/ui';
import {
    ContextAPI,
    SimpleAPI
} from "@/composable/apiHandler";
import type { 
    Tab,
    ResponseStatus
} from '~/models/type';
import { 
    PinIcon,
    Logo 
} from '~/assets/images';
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
const dataProducts: Ref<any> = ref<any>({});
const dataTravels: Ref<any> = ref<any>({});
const switchSrc: Ref<string> = ref<string>('https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg');
const activeIdx: Ref<number> = ref<number>(0);
const backgrounImage = [
    'https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg',
    'https://t4.ftcdn.net/jpg/02/35/44/49/360_F_235444984_Ngx57fURYhp2A1cHWSfvDWEf6OWRoUK2.jpg',
    'https://c4.wallpaperflare.com/wallpaper/623/232/3/beautiful-village-wallpaper-preview.jpg'
];
const main_card = [
    {
        img: 'https://i.pinimg.com/474x/6b/12/36/6b1236a4e2865155950091285625070a.jpg',
        text: 'Adventure Accessories',
        to: '/products/product'
    },
    {
        img: ' https://i.pinimg.com/474x/6b/62/50/6b6250456f655d21b786bb3d42e0f6a8.jpg',
        text: 'Adventure Place Recommend',
        to: '/travels/travel'
    }
];
const tabs: Ref<Tab[]> = computed(() => [
    {
        label: 'Tools'
    },
    {
        label: "Recommend Place"
    }
]);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical section
 */
const switchBackground = (idx: number) => {
    if (idx >= 0 && idx < backgrounImage.length) {
        switchSrc.value = backgrounImage[idx];
        activeIdx.value = idx as number;
    } 
};
/**
 * End::Some logical section
 */

/**
 * Begin::Fetch data section
 */
 const fetchDataProduct = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = 'products';
    if(search)
    {
        url += `&search=${search}`;
    }
    const result: ResponseStatus = await api.get(url) as ResponseStatus;
    if(!result.error)
    {
        dataProducts.value = result as any;
        console.log(dataProducts.value)
    }
}
const fetchDataTravel = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = 'locations';
    if(search)
    {
        url += `&search=${search}`;
    }
    const result: ResponseStatus = await api.get(url) as ResponseStatus;
    if(!result.error)
    {
        dataTravels.value = result as any;
    }
}
/**
 * Begin::Fetch data section
 */

onMounted(async (): Promise<void> => {
    await fetchDataProduct();
    await fetchDataTravel();
})

</script>
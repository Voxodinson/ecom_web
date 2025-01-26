<template>
    <div
        class="w-full h-fit bg-gray-100 flex flex-col items-start justify-start p-3">
        <div 
            class="w-full h-[70vh] flex gap-3 items-start justify-start">
            <div 
                class="h-full  overflow-y-auto  w-[20%] bg-white p-2 rounded-md">
                <div 
                    class="pb-2 border-b-[1px] border-gray-200 flex justify-between">
                    <h3
                        class="text-[1.2rem] font-semibold">
                        Daily Discount
                    </h3>
                    <span
                        class="text-red-500">
                        50% off
                    </span>
                </div>
                <div 
                    class="flex flex-col gap-2 items-start justify-start mt-2">
                    <ULink
                        v-for="(item, idx) in discountItems"
                        :key="idx"
                        to=""
                        class="text-[.9rem] hover:bg-gray-100 w-full text-left p-1 px-3 rounded-md">
                        {{ item.label }}
                    </ULink>
                </div>
            </div>
            <div 
                class="w-[60%] h-full flex flex-col gap-3">
                <div 
                    class="w-full h-[80%] rounded-md overflow-hidden">
                    <UCarousel 
                        v-slot="{ item, idx }"
                        :items="slideItems" 
                        :ui="{ item: 'basis-full' }" 
                        class="rounded-lg h-full overflow-hidden" 
                        arrows>
                        <img 
                            :src="item.image" 
                            class="w-full h-full" 
                            draggable="false">
                    </UCarousel>
                </div>
                <div class="w-full h-[20%] overflow-auto rounded-md ">
                    <div 
                        class="w-fit h-full flex gap-3 ">
                        <div
                            v-for="i in 10"
                            class=" bg-white w-[300px] group shadow-sm rounded-md relative overflow-hidden flex gap-3 items-center  ">
                            <img 
                                src="https://i.pinimg.com/474x/93/b7/db/93b7db8579b3be3c9911acd7dfe7118a.jpg" 
                                alt="brand logo"
                                class="w-[100px] h-[100px]">
                            <span>
                                The North Face
                            </span>
                            <ULink
                                label="View All Brand Items"
                                class="absolute w-full h-full hidden bg-[#2973B2] text-white group-hover:block">
                                View All Brand Product
                            </ULink>
                        </div>
                    </div>
                </div>
            </div>
            
            <div 
                class="h-full w-[20%] grid grid-rows-2 gap-3">
                <div
                    v-for="i in 2" 
                    class="w-full bg-blue-100 relative rounded-md overflow-hidden group">
                    <img 
                        src="https://i.pinimg.com/474x/58/e7/d1/58e7d18be3f29d9855dcc96909a11211.jpg" 
                        alt=""
                        class="w-full h-full object-cover">
                    <div class="hidden absolute top-0 bg-blue-200 transition bg-opacity-70 w-full h-full p-3 items-start left-0 group-hover:flex flex-col">
                        <h3
                            class="font-semibold text-[1.2rem]">
                            New Arrival
                        </h3>
                        <span
                            class="text-gray-600 text-[.8rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rerum?
                        </span>
                        <UButton
                            label="View Details"
                            size="xs"
                            color="white"
                            variant="soft"
                            class="bg-white border-[1px] mt-6 border-gray-400"/>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="w-full p-3 bg-white flex flex-col gap-3 rounded-md overflow-hidden mt-3">
            <div 
                class="w-full flex items-center justify-between">
                <h3
                    class="font-semibold text-[1.2rem] capitalize">
                    Best Sale & Products
                </h3>
                <ULink
                    class="text-black flex items-center font-thin text-[.9rem] hover:underline capitalize">
                    View All
                    <UIcon
                        name="material-symbols:arrow-right-alt-rounded"
                        class="w-4 h-4"/>
                </ULink>
            </div>
            <div 
                class="w-full h-fit grid grid-cols-2 gap-3">
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
        <div 
            class="w-full mt-3 p-3 rounded-md overflow-hidden bg-white">
            <div class="w-full">
                <h3
                    class="font-semibold text-[1.2rem] capitalize">
                    Best Sale
                </h3>
            </div>
            <div 
                class="w-full grid grid-cols-4 gap-3 mt-3">
                <ProductCard
                    v-for="i in 4"/>
            </div>
        </div>
        <div 
            class="w-full bg-white h-fit p-2 rounded-md flex flex-col gap-3 mt-3">
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
            <p
                class="text-[0.9rem] pl-4 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iste!
            </p>
            <p
                class="text-[.8rem] text-gray-400 pl-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex nulla molestias. Quasi omnis obcaecati eligendi! Expedita reprehenderit, optio ea voluptate inventore corporis similique, laborum, deleniti harum eius ex iusto ipsa. Ad eius, ab eos distinctio at quasi est provident consequatur labore. Labore, dolore odit maiores rerum esse quam nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus nulla itaque quo optio! Aut omnis consequuntur repellendus quae optio.
            </p>
            <div 
                class="w-full flex items-center justify-center p-3 bg-green-500 gap-3 mt-3 rounded-md">
                <UIcon
                    name="fluent-emoji-flat:glowing-star"
                    class="w-10 h-10"/>
                <p  
                    class="text-white">
                    New menber 
                    <span
                        class="text-yellow-400 capitalize">
                        get free shipping
                    </span>
                    with 2 time orders from our website
                    <ULink
                        class="text-white text-[.9rem] underline capitalize">
                        Register Now.....
                    </ULink>
                </p>
            </div>
        </div>
       
    </div>
</template>

<script setup>
import { 
    ProductCard 
} from '~/components/ui';
definePageMeta({
    colorMode: 'light'
});

/**
 * Begin::Declare variable section
 */
const discountItems = [
    { label: 'Paddleboarding' },
    { label: 'Rock Hopping' },
    { label: 'Zip Lining' },
    { label: 'Horseback Riding' },
    { label: 'Scuba Diving' },
    { label: 'Snorkeling' },
    { label: 'Caving' },
    { label: 'Beachcombing' },
    { label: 'Snowmobiling' },
    { label: 'Bungee Jumping' },
    { label: 'Skydiving' },
    { label: 'Geocaching' },
    { label: 'Trekking' },
    { label: 'Wilderness Survival' },
    { label: 'Off-roading' },
    { label: 'Fishing Tournaments' },
    { label: 'Sailing' },
    { label: 'Tandem Biking' },
    { label: 'Camping with Pets' },
    { label: 'Tree Climbing' }
]
const slideItems = [
    {
        image: 'https://i.pinimg.com/736x/78/39/50/783950f5aa9b56626989ee3729404eac.jpg',
    },
    {
        image: 'https://i.pinimg.com/736x/78/39/50/783950f5aa9b56626989ee3729404eac.jpg'
    },
    {
        image: 'https://i.pinimg.com/736x/78/39/50/783950f5aa9b56626989ee3729404eac.jpg',
    },
    {
        image: 'https://i.pinimg.com/736x/78/39/50/783950f5aa9b56626989ee3729404eac.jpg'
    },
]
/**
 * End::Declare variable section
 */
</script>

<style lang="scss" scoped>

</style>
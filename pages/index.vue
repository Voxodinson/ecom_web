<template>
    <div
        class="w-full h-fit bg-white flex flex-col items-start justify-start">
        <div 
            class="w-full h-[100vh] relative">
            <img 
                src="https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg" 
                alt=""
                class="w-full h-full object-cover">
            <div 
                class="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div 
                    class="w-full h-full bg-black/50 mix-blend-multiply"></div>
            </div>
            <div 
                class="w-full h-full flex items-center justify-center absolute top-0 left-0">
                <div 
                    class="flex items-center justify-center flex-col">
                    <h1
                        class="text-[3rem] font-bold uppercase text-white">
                        Company Name
                    </h1>
                    <h3
                        class="text-[1.2rem] font-semibold text-white mt-3">
                        We prvide a travel products and recommend most popular place
                    </h3>
                    <p
                        class="w-[80%] text-white text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempora sunt ex vel ratione nesciunt quam, laudantium voluptatem! Maiores iure officiis porro pariatur obcaecati natus eligendi autem. Labore quidem amet itaque, hic, provident nisi possimus praesentium recusandae ut, veniam vel?
                    </p>
                    <UButton
                        label="Explore our website"
                        variant="none"
                        color="white"
                        size="md"
                        class="bg-white bg-opacity-50 mt-6 text-white rounded-full px-10 hover:px-20 transition"/>
                </div>
                
            </div>
        </div>

        <div 
            class="w-full h-fit  grid grid-rows-2 p-3 rounded-md">
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
    </div>
</template>

<script setup>
import { UButton } from '#components';
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
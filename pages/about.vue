<template>
    <div
        class="w-full h-fit flex flex-col items-center justify-center">
        <div 
            class="h-[60vh] w-full relative">
            <img 
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_23-2149158786.jpg?t=st=1746003086~exp=1746006686~hmac=2c00fb7f0ac98667d22e0ca2a85fdef907a7b1ae459e76f4e24ec64c4365d258&w=2000"
                alt="bg image"
                class="w-full h-full object-cover">
            <div 
                class="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div 
                    class="w-full h-full bg-black/50 mix-blend-multiply"></div>
            </div>
            <div
                class="w-full h-full flex items-center  justify-center flex-col absolute top-0 left-0">
                <h3 
                    class="text-[3rem] uppercase tracking-tighter text-white font-semibold">
                    <span
                        class="text-sky-400">
                        Who
                    </span> 
                    are we and 
                    <span
                        class="text-sky-400">
                        What
                    </span> 
                    do we stand for?
                </h3>
                <p
                    class="text-center text-[.9rem] w-[90%] text-white">
                    We are passionate travel enthusiasts committed to enhancing your journey with thoughtfully designed, high-quality travel products. Our mission is to provide travelers with reliable, stylish, and functional gear that simplifies every trip—whether it's a weekend getaway or a global adventure. We stand for durability, comfort, and innovation, ensuring every product we offer meets the highest standards of quality and performance. At the heart of our brand is a belief in seamless travel experiences, built on trust, customer satisfaction, and a genuine love for exploration.
                </p>
            </div>
        </div>
    </div>
    <div 
        class="w-full flex items-center justify-center mt-3">
        <div 
            class="w-[90%] flex items-center flex-col justify-center">
            <h3 
                class="text-[1.2rem] uppercase tracking-tighter font-semibold">
                Our and Development Teams
            </h3>
            <div 
                class="mt-6 flex gap-6 items-center justify-center flex-wrap">
                <div 
                    v-for="(team, idx) in teamMembers"
                    :key="idx"
                    class="w-fit h-fit flex items-center justify-center gap-3 flex-col">
                    <div 
                        class="w-[200px] h-[200px] rounded-full overflow-hidden">
                        <img 
                            :src="(team.image || UserImage)" 
                            alt="user profile"
                            class="w-full h-full object-cover">
                    </div>
                    <h3
                        class="text-gray-400 text-[1.2rem]">
                        {{ team.name }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <div 
        class="w-full flex flex-col items-center justify-center h-fit py-12 relative">
        <div    
            class="w-[90%] h-fit">
            <h3 
                class="text-[1.2rem] uppercase tracking-tighter font-semibold">
                <span
                    class="text-sky-400">
                    Who
                </span> 
                are we?
            </h3>
            <ul
                class="flex flex-col gap-3 list-disc list-inside">
                <li>
                    We are a community of university students who love to explore!
                    Our mission is to make discovering travel destinations easier, more exciting, and more personal. We collect real recommendations from students and locals to help you find the best places to visit — from hidden gems in nearby towns to famous spots worth the trip.
                </li>
                <li>
                    Whether you're looking for a weekend getaway, a scenic hiking trail, cultural landmarks, or the best local food spots, we provide trusted, community-sourced suggestions that match your student lifestyle and budget.
                </li>
                <li>
                    Explore smarter. Travel like a local. Make memories you'll never forget.
                </li>
            </ul>
        </div>
        <div    
            class="w-[90%] h-fit mt-6">
            <h3 
                class="text-[1.2rem] uppercase tracking-tighter font-semibold">
                <span
                    class="text-sky-400">
                    What
                </span> 
                do we stand for?
            </h3>
            <ul
                class="flex flex-col gap-3 list-disc list-inside">
                <li>
                    We stand for quality, reliability, and the freedom to travel with confidence. Every product we offer is a reflection of our commitment to making travel easier, more organized, and more enjoyable. We believe in thoughtful design, sustainable choices, and putting our customers at the center of everything we do. Our goal is to support every journey—big or small—with gear that delivers comfort, convenience, and peace of mind.
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { UserImage } from '~/assets/images';
definePageMeta({
    colorMode: 'light'
});

const teamMembers = [
    {
        name: 'xxxxxxxxxxx',
        image: ''
    },
    {
        name: 'xxxxxxxxxxx',
        image: ''
    },
    {
        name: 'xxxxxxxxxxx',
        image: ''
    },
    {
        name: 'xxxxxxxxxxx',
        image: ''
    }
];
</script>
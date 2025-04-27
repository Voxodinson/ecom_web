<template>
    <div
        v-for="(data, idx) in props.data"
        :key="idx"
        class="w-full h-fit flex flex-col border-gray-3 justify-between rounded-md relative rmd overflow-hidden">
        <div class="h-[250px] w-full rounded-md overflow-hidden">
            <ULink
                :to="`/travels/${data.id}`"
                class="w-full h-full cursor-pointer group">
                <img 
                    :src="(data.image as string)" 
                    alt="image"
                    class="w-full h-full object-cover group-hover:scale-110 transition">    
            </ULink>
        </div>
        <div 
            class="w-full py-3 h-fit flex flex-col">
            <h3
                class="text-gray-600 text-[1rem] overflow-hidden text-ellipsis w-full line-clamp-1">
                {{ data.title }}
            </h3>
            <p 
                class="text-gray-400 text-[.8rem] overflow-hidden text-ellipsis w-full line-clamp-2">
                {{ data.description }}
            </p>
            <div class="w-full mt-6 flex flex-wrap items-center gap-2">
                <div 
                    class="w-fit flex gap-2">
                    <UIcon
                        name="material-symbols:favorite-outline"
                        class="w-7 h-7 text-gray-400 hover:scale-110 transition cursor-pointer"/>
                </div>
                <span
                    class="text-gray-400 font-thin mx-2">
                    |
                </span>
                <div 
                    class="flex gap-3 items-center bg-blue-100 px-3 py-1 rounded-full w-fit">
                    <UIcon
                        name="hugeicons:money-send-square"
                        class="w-5 h-5 text-blue-500"/>
                    <div 
                        class="w-fit text-[.8rem]">
                        $100 - $200
                    </div>
                </div>
                <div 
                    class="flex gap-3 items-center bg-green-200 px-3 py-1 rounded-full w-fit">
                    <UIcon
                        name="material-symbols-light:map-search-outline"
                        class="w-5 h-5 text-green-500"/>
                    <div 
                        class="w-fit text-[.8rem]">
                        Map View
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script setup lang="ts">
import type { 
   Items 
} from '~/models/type';
import { 
    useRoute 
} from 'vue-router';

/**
* Begin::Set event trigger to parent component
*/
const route = useRoute();
const props = withDefaults(defineProps<{
    data: Items[],
}>(),{
    data: () => []
});
const emit = defineEmits<{
 (event: 'updateCart', data: Items[]): void;
 (event: 'updateFilters', data: Items): void;
}>();
/**
* End::Set event trigger to parent component
*/

</script>
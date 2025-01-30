<template>
     <div
        v-for="(data, idx) in props.data"
        :key="idx"
        class="w-full flex flex-col h-[400px] justify-between rounded-md p-2 shadow-md">
        <div class="w-full relative">
            <div 
                class="w-full h-[250px] rounded-t-md overflow-hidden">
                <img 
                    :src="(data.image as string)" 
                    alt="Image product"
                    class="w-full h-full">
                <span
                    class="text-red-500 rounded-md p-1 w-[60px] text-[.9rem] flex items-center justify-center bg-white bg-opacity-60 absolute top-1 right-1">
                    {{data.price}}$
                </span>
            </div>
            <h3 class=" font-semibold mt-1 text-ellipsis overflow-hidden line-clamp-2 whitespace-normal truncate">
                {{ data.title }}
            </h3>
            <p
                class="w-full text-[.8rem] line-clamp-1 text-ellipsis mt-1">
                {{ data.description }}
            </p>
        </div>
        <div class="w-full">
            <NuxtLink
                :to="`/products/${data.id}`"
                class="shadow-sm w-full p-1 rounded-md text-white bg-green-500 flex items-center justify-center text-center mt-3 border-none hover:bg-green-300">
                View details
            </NuxtLink>
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

const route = useRoute();
const productId = route.params.id;
/**
 * Begin::Set event trigger to parent component
 */
 const props = withDefaults(defineProps<{
    data: any
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
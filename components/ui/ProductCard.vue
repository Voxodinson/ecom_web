<template>
     <div
        class="w-full flex flex-col justify-between h-fit bg-gray-100 rounded-md p-1 shadow-md">
        <div class="w-full relative">
            <div 
                class="w-full h-[300px] rounded-t-md overflow-hidden">
                <img 
                    src="https://i.pinimg.com/474x/08/69/d4/0869d47dbc921d0a9456818d2599dde5.jpg" 
                    alt="Image product"
                    class="w-full h-full">
                <span
                    class="text-red-500 rounded-md p-1 w-[60px] text-[.9rem] flex items-center justify-center bg-white bg-opacity-60 absolute top-1 right-1">
                    100$
                </span>
            </div>
            <h3 class=" font-semibold mt-1">
                Product Name
            </h3>
            <p
                class="w-full text-[.8rem] line-clamp-1 text-ellipsis mt-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam in inventore, quibusdam enim alias aliquid nesciunt neque eveniet optio consectetur!
            </p>
        </div>
        <div class="w-full">
            <UButton
                size="sm"
                color="sky"
                label="Add To Cart"
                variant="solid"
                @click="() => {
                }"
                class="shadow-sm w-full bg-blue-500 flex items-center justify-center text-center mt-3 border-none hover:bg-blue-400"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { 
    Items 
} from '~/models/type';
/**
 * Begin::Set event trigger to parent component
 */
//  const props = withDefaults(defineProps<{
//     data: Items[],
//     removeItems: Items[],
//     filterData: (current_page?: number, filters?: Items) => Promise<void>,
//     searchData: (value: string) => Promise<void>,
// }>(),{
//     data: () => [],
//     removeItems: () => [],
//     filterData: async () => {},
//     searchData: async () => {}
// });
const emit = defineEmits<{
  (event: 'updateCart', data: Items[]): void;
  (event: 'updateFilters', data: Items): void;
}>();
/**
 * End::Set event trigger to parent component
 */

</script>
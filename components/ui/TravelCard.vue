<template>
    <div
        v-for="(data, idx) in props.data"
        :key="idx"
        class="w-full h-[250px] flex flex-col justify-between rounded-md relative rmd overflow-hidden">
        <img 
            :src="(data.image as string)" 
            alt="image"
            class="w-full h-full object-cover">
        <div 
            class="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-3 gap-3 bg-black bg-opacity-20">
            <h3
                class="text-white text-[1.2rem]">
                {{ data.title }}
            </h3>
            <p
                class="text-white text-[.8rem] text-ellipsis overflow-hidden whitespace-nowrap truncate w-[300px]">
                {{ data.description }}
            </p>
            <ULink
                :to="`/travels/${data.id}`"
                class="w-[200px] p-0.5 px-4 rounded-md text-white border-white bg-white bg-opacity-30 hover:bg-opacity-20 border-[1px]">
                View Detais
            </ULink>
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
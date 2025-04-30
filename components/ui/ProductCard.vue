<template>
     <div
        v-for="(data, idx) in props.data"
        :key="idx"
        class="w-full flex flex-col h-fit justify-between rounded-md">
        <div class="w-full relative">
            <div 
                class="w-full h-[270px] rounded-md overflow-hidden">
                <NuxtLink
                    :to="`/products/${data.id}`"
                    class=""> 
                    <img 
                        :src="(data.image as string || 'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=')" 
                        alt="Image product"
                        class="w-full h-full hover:scale-110 transition">
                </NuxtLink>
            </div>
            <h3
                class="text-gray-600 text-[1.2rem] mt-1 overflow-hidden text-ellipsis w-full line-clamp-1">
                {{ data.name }}
            </h3>
            <p
                class="w-full text-[.9rem] text-gray-400 line-clamp-2 overflow-hidden text-ellipsis">
                {{ data.description || 'Need description'}}
            </p>
            <span
                class="text-red-500 text-[1.2rem]">
                {{data.price}}$
            </span>
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
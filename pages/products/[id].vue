<template>
    <div
        class="mt-[100px] h-[100vh]">
        {{ data.title }}
    </div>
</template>

<script lang="ts" setup>
import {
    ContextAPI,
    SimpleAPI
} from "@/composable/apiHandler";
import type { 
    ResponseStatus,
    Items
} from '~/models/type';

import { useRoute } from 'nuxt/app';

const route = useRoute();
const productId = route.params.id;

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
const data: Ref<Items> = ref<Items>({});

/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical section
 */

/**
 * End::Some logical section
 */

/**
 * Begin::Fetch data section
 */
 const fetchData = async (current_page: number = 1, search: string = ''): Promise<void> => {
    const per_page: number = 10;
    let url: string = `https://fakestoreapi.com/products/${productId}`;
    if(search)
    {
        url += `&search=${search}`;
    }
    const result: ResponseStatus = await api.get(url) as ResponseStatus;
    if(!result.error)
    {
        data.value = result as any;
    }
    console.log(data.value)
}
/**
 * Begin::Fetch data section
 */

onMounted(async (): Promise<void> => {
    await fetchData();
})
</script>
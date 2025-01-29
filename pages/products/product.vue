<template>
    <div
        class="mt-[55px] w-full p-6 flex flex-col items-center justify-center">
        <div 
            class="w-full border-b-[1px] border-gray-300 flex justify-between items-center pb-2">
            <h3
                class="font-semibold text-[1.2rem] uppercase">
                Products
            </h3>
            <UButton
                icon="material-symbols-light:tune"
                size="md"
                color="white"
                variant="none"
                @click="() => {
                    toggleFilter();
                }"
                class="bg-[#2973B2] text-white"/>
        </div>
        <div
            v-if="isOpenFilter"
            class="w-full bg-gray-100 p-3 rounded-md mt-3">
            <div>
                <span
                    class="font-medium">
                    Filter by Color
                </span>
                <div 
                    class="mt-2 p-2 bg-white rounded-md flex flex-wrap gap-1">
                    <UFormGroup
                        class="w-[calc(99%/3)]"
                        label="Brand"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a brand"
                            class="w-full"/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-[calc(99%/3)]"
                        label="Color"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a color"
                            class="w-full"/>
                    </UFormGroup>
                    <UFormGroup
                        class="w-[calc(99%/3)]"
                        label="Best For"
                        name="">
                        <SelectMenu
                            name=""
                            :options="[]"
                            option-attribute="name"
                            value-attribute="id"
                            id-attribute="id"
                            placeholder="select a best fir"
                            class="w-full"/>
                    </UFormGroup>
                </div>
            </div>
            <div class="py-2">
                <span
                    class="font-medium">
                    Filter by Type
                </span>
                <div 
                    class="mt-2 p-2 bg-white rounded-md flex flex-wrap gap-2">
                    <UButton
                        v-for="i in 10"
                        size="sm"
                        color="white"
                        variant="none"
                        label="Home"
                        class="bg-gray-100 shadow-sm hover:bg-blue-400 hover:text-white transition"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { 
    SelectMenu 
} from '~/components/ui';
definePageMeta({
    colorMode: 'light'
});
/**
 * Begin::Declare variable
 */
const isOpenFilter: Ref<boolean> = ref<boolean>(false)
/**
 * End::Declare variable
 */

/**
 * Begin::Some logical
 */
const toggleFilter = (): void => {
    isOpenFilter.value = !isOpenFilter.value
}
/**
 * End::Some logical
 */
</script>
<template>
    <UModal
        :model-value="open"
        :ui="{
            width: 'w-[60%] max-h-[90vh] sm:max-w-1/2',
        }"
        prevent-close> 
        <div 
            class="w-full h-[50px] flex p-2 justify-between items-center border-b-[1px] border-gray-200">
            <h3
                class=" capitalize font-semibold">
                Search
            </h3>
            <UIcon 
                name="material-symbols:close-rounded" 
                class="text-[1.2rem] hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer"
                @click="(): void => {
                    emits('toggle', false);
                }"/>
        </div>
         <div 
            class="h-[calc(100%-50px)] w-full overflow-auto flex flex-col items-center gap-3">
            <div
                class="w-full h-fit px-3 pb-6">
                <div 
                    class="w-full bg-white py-2 z-40 flex gap-2 sticky top-0">
                    <UInput 
                        color="white" 
                        variant="outline" 
                        placeholder="Search..." 
                        size="md"
                        icon="i-heroicons-magnifying-glass-20-solid"
                        class="w-full"/>
                    <UButton
                        color="black"
                        size="sm"
                        icon="carbon:zoom-reset"
                        class="border-none px-3"/>  
                </div>
                <div 
                    class="mt-3 border-b-[1px] border-gray-200">
                    <h6
                        class="text-[.9rem] font-medium">
                        Results Found: 2
                    </h6>
                </div>
                <div 
                    class="w-full grid grid-cols-2 gap-3 mt-3 items-center">
                    <ULink
                        v-for="(i, idx) in 7"
                        :key="idx"
                        to="/travels/1"
                        class="w-full cursor-pointer group">
                        <div 
                            class="flex w-full gap-3 p-3 border-[1px] border-gray-200 rounded-md items-start justify-start">
                            <div class="w-[70px] h-[70px] rounded-md overflow-hidden border-[1px] border-gray-200">
                                <img 
                                    src="https://cambodianess.com/uploads/images/1660396534f0liw-a.jpg" 
                                    alt=""
                                    class="w-full h-full object-cover group-hover:scale-110 transition">
                            </div>
                            <div 
                                class="flex flex-col items-start justify-start">
                                <h3
                                    class="font-semibold">
                                    Angkor Wat
                                </h3>
                                <span
                                    class="text-[.7rem] flex gap-1 left-3 items-center text-gray-400">
                                    <UIcon
                                        name="mdi:earth"
                                        class="w-3.5 h-3.5 text-gray-300"/>
                                    10-05-2023 12:30:00
                                </span>
                                <div 
                                    class="flex flex-wrap gap-6 items-center mt-1">
                                    <div 
                                        class="w-fit flex items-center gap-1 text-gray-400">
                                        <UIcon
                                            name="material-symbols:location-on-outline"
                                            class="w-5 h-5"/>
                                        <span
                                            class="text-[.8rem]">
                                            Siemreap
                                        </span>
                                    </div>
                                    <div class="flex gap-1 items-center">
                                        <UIcon
                                            name="weui:eyes-on-filled"
                                            class="w-6 h-6 text-gray-300 hover:scale-110 transition cursor-pointer"/>
                                        <span
                                            class="text-[.9rem] text-gray-400">
                                            10.2k
                                        </span>
                                    </div>
                                    <div 
                                        class="w-fit text-[.8rem]">
                                        4.9
                                        <span
                                            class="text-gray-400">
                                            ( 1000 reviews )
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ULink>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script setup lang="ts">

/**
 * Begin::Set event trigger to parent component
 */
const emits = defineEmits<{
    (event: 'toggle', state: boolean): void;
    (event: 'update:data'): void;
}>();

withDefaults(defineProps<{
    open: boolean
}>(),{
    open: false
});

/**
 * End::Set event trigger to parent component
 */
</script>
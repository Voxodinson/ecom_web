<template>
    <input
        ref="input"
        type="file"
        :name="name"
        :accept="accept"
        :id="useId()"
        class="data-input absolute h-0.5 w-0.5 -z-10 outline-none overflow-hidden m-0 p-0 bg-transparent border-none"
        :tabindex="0"
        :data-image="String(image)"
        role="input"
        required/>
    <div
        role="image"
        @drop.prevent="(event: Event): void => {
            handleDrop(event);
        }"
        @paste.prevent="(event: Event): void => {
            handlePaste(event as ClipboardEvent);
        }"
        @mouseenter="(event: Event): void => {
            const target: HTMLDivElement = (event?.target as HTMLElement)?.closest('[role=\'image\']') as HTMLDivElement;
            if(target){
                target.contentEditable = 'true';
            }
        }"
        @mouseleave="(event: Event): void => {
            const target: HTMLDivElement = (event?.target as HTMLElement)?.closest('[role=\'image\']') as HTMLDivElement;
            if(target){
                target.contentEditable = 'false';
            }
        }"
        @input.prevent
        @dragover.prevent
        @keydown.prevent
        class="relative w-full h-full focus:outline-none">
        <div
            v-if="Boolean(image === null)"
            @click="(): void => {
                triggerClick();
            }"
            class="flex items-center justify-center w-full h-full relative cursor-pointer">
            <UIcon
                name="material-symbols:add-to-photos-outline-rounded"
                class="w-6 h-7 text-blue-400 shadow-md"/>
        </div>
        <div
            v-else
            class="relative w-full h-full">
            <img
                :src="String(image)"
                alt="photo"
                loading="lazy"
                class="data-set w-full h-full object-cover"/>
            <div
                @click="(): void => {
                    resetFile();
                }"
                class="absolute top-0 right-0 p-1 cursor-pointer">
                <UIcon
                    name="material-symbols:cancel-outline"
                    class="w-6 h-6"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {
    VNodeRef
} from "vue";

withDefaults(defineProps<{
    name: string;
    class?: string;
    accept?: string;
}>(),{
    name: '',
    class: '',
    accept: 'image/{png,jpg}'
});

/**
 * Begin::Declare variable section
 */
const image: Ref<string | ArrayBuffer | any> = ref(null);
const input: Ref<VNodeRef | null> = ref<VNodeRef | null>(null);
/**
 * End::Declare variable section
 */

/**
 * Begin::Some logical in this component
 */
const handleFile = (file: File): void => {
    if(file){
        const reader: FileReader = new FileReader();
        reader.onload = (): void => {
            image.value = reader?.result;
        }
        reader.readAsDataURL(file);
    }
}

const triggerClick = (): void => {
    const inputElement: HTMLInputElement = (unref(input) as unknown) as HTMLInputElement;

    if(inputElement){
        inputElement.onchange = (event: Event): void => {
            const file: File | undefined = (event?.target as HTMLInputElement)?.files?.[0];
            handleFile(file as File);
        }
        inputElement?.click();
    }
}

const handleDrop = (event: Event): void => {
    const droppedFiles = (event as DragEvent)?.dataTransfer?.files;
    if(droppedFiles && droppedFiles.length > 0){
        const file = droppedFiles[0];
        if(file) setFileToInput(file);
        handleFile(file);
    }
}

const handlePaste = async (event: ClipboardEvent): Promise<void> => {
    const items = event?.clipboardData?.items;
    for(const item of (items || [])){
        if(item?.type?.indexOf('image') !== -1){
            const file: File | null = item?.getAsFile();
            if(file) setFileToInput(file);
            handleFile(file as File);
        }
    }
}

const setFileToInput = (file: File): void => {
    const inputElement: HTMLInputElement = (unref(input) as unknown) as HTMLInputElement;
    const dataTransfer = new DataTransfer();
    dataTransfer?.items?.add(file);
    inputElement.files = dataTransfer?.files;
    inputElement?.dispatchEvent(new Event('change', {
        bubbles: true,
        cancelable: true,
        composed: true
    }));
}

const resetFile = (): void => {
    const inputElement: HTMLInputElement | null = unref(input) as HTMLInputElement | null;
    if(inputElement){
        inputElement.value = '';
    }
    image.value = null;
}
/**
 * End::Some logical in this component
 */
</script>
<template>
    <input
        ref="input"
        type="file"
        :name="name"
        :accept="accept"
        multiple
        class="data-input absolute h-[2px] w-[2px] -z-10 outline-none overflow-hidden m-0 p-0 bg-transparent border-0"
        @change="onFileChange"
    />
    <div
        role="image"
        @drop.prevent="handleDrop"
        @paste.prevent="handlePaste"
        class="relative flex gap-3 w-full h-full flex-wrap focus:outline-none"
    >
        <!-- Upload Button -->
        <div
            @click="triggerClick"
            class="flex w-[200px] h-[200px] items-center justify-center rounded-md border-[1px] border-gray-200 border-dashed relative cursor-pointer">
            <UIcon name="material-symbols:add-to-photos-outline-rounded" />
        </div>

        <!-- Display Selected Images -->
        <div v-for="(img, index) in images" :key="index" class="w-[200px] h-[200px] relative">
            <img :src="img" alt="photo" class="data-set flex w-full h-full object-cover border-gray-300" />
            <div
                @click="resetFile(index)"
                class="bg-gray-200 p-1 h-[20px] w-[20px] flex items-center justify-center absolute top-0 right-0 cursor-pointer">
                <UIcon name="material-symbols-light:close" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { VNodeRef } from "vue";

/**
 * Define props
 */
defineProps({
    name: {
        type: String,
        required: true,
    },
    accept: {
        type: String,
        default: "image/png, image/jpg, image/jpeg",
    },
});

/**
 * Declare variables
 */
const images: Ref<any[]> = ref([]);
const input: Ref<VNodeRef | null> = ref<VNodeRef | null>(null);

/**
 * Handle multiple file selection
 */
const handleFile = (files: FileList): void => {
    Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
            images.value.push(reader.result as string);
        };
        reader.readAsDataURL(file);
    });

    resetInput(); // Reset input after selection
};

/**
 * Handle file input change
 */
const onFileChange = (event: Event): void => {
    const fileList = (event.target as HTMLInputElement)?.files;
    if (fileList) handleFile(fileList);
};

/**
 * Trigger input file dialog
 */
const triggerClick = (): void => {
    const inputElement = input.value as any;
    if (inputElement) {
        inputElement.click();
    }
};

/**
 * Handle drag & drop upload
 */
const handleDrop = (event: DragEvent): void => {
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles && droppedFiles.length > 0) {
        handleFile(droppedFiles);
    }
};

/**
 * Handle image paste (Ctrl + V)
 */
const handlePaste = async (event: ClipboardEvent): Promise<void> => {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
        if (item.type.startsWith("image")) {
            const file = item.getAsFile();
            if (file) handleFile([file] as unknown as FileList);
        }
    }
};

/**
 * Remove a specific image
 */
const resetFile = (index: number): void => {
    images.value.splice(index, 1);
};

/**
 * Reset file input so the same files can be selected again
 */
const resetInput = (): void => {
    const inputElement = input.value as any;
    if (inputElement) {
        inputElement.value = ""; // Clear input to allow reselecting the same files
    }
};
</script>

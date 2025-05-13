<template>
    setting
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'setting',
    colorMode: 'light'
});
const selectedTabSetting: Ref<number> = ref<number>(0);
const selectedTabYourAccount: Ref<number> = ref<number>(0);

const dropdownItems = [{
    label: 'Your Account',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    slot: 'getting-started'
}];

const dropdownItems_your_account = [{
    label: 'Your Account',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    slot: 'getting-started'
}];

const tabSetting: Ref<any[]> = computed(() => [
    {
        label: 'Your Account',
        icon: 'material-symbols:account-circle-full',
        to: '/'
    },
    {
        label: "Help Center",
        icon: 'ant-design:warning-twotone'
    }
]);

const tabYourAccount: Ref<any[]> = computed(() => [
    {
        label: 'Account Information',
        icon: 'material-symbols:account-circle-full'
    },
    {
        label: "Change Your Password",
        icon: 'hugeicons:reset-password'
    }
]);


</script>
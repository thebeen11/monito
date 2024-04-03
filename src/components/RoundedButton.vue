<template>
    <button :class="`${bgColor} rounded-${rounded} font-${weight} h-11 text-white outline-none border-none px-7 `">
        {{ label }}
    </button>
</template>

<script lang="ts" setup>
    interface Props {
        label: string,
        bgColor?: string,
        rounded?: string,
        weight?: string
    };
    const props = withDefaults(defineProps<Props>(), {
        bgColor: 'bg-primary',
        rounded: 'full',
        weight: '500'
});
</script>
<template>
    <button :class="`border ${outLineColor} rounded-${rounded} font-${weight} h-11 text-${color} outline-none px-7 flex items-center gap-2 `">
        {{ label }}
        <img class=" h-4" v-if="icon" :src="icon" alt="">
    </button>
</template>

<script lang="ts" setup>
    interface Props {
        label: string,
        outLineColor?: string,
        color: string
        rounded?: string,
        weight?: string,
        icon?: string
    };
    const props = withDefaults(defineProps<Props>(), {
        outLineColor: 'border-primary',
        color: 'primary',
        rounded: 'full',
        weight: '500'
});
</script>
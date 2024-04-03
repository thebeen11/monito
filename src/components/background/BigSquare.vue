<template>
  <div
    :class="`w-[635px] aspect-square lg:rounded-[99px] rounded-[61px] ${bgColor} -z-10`"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  bgColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  bgColor: "bg-primary",
});
</script>

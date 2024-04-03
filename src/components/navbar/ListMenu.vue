<template>
  <div>
    <ul class=" flex gap-5 font-bold text-primary">
        <li v-for="(list, i) in menu" :key="i">
          <a :href="list.path">{{ list.name }}</a>
        </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

interface Menu {
  name: string;
  path: string;
}
const menu = reactive([
  { name: "Home", path: "/" },
  { name: "Category", path: "#" },
  { name: "About", path: "#" },
  { name: "Contact", path: "#" },
] as Menu[]);
</script>

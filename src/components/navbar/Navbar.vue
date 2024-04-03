<template>
  <nav class="flex items-center justify-between relative w-full">
  <img v-if="!searchBar" class="lg:hidden" src="/src/assets/icons/Hamburger_MD.svg" alt="Hamburger">
    <img v-if="!searchBar" src="/src/assets/img/Logo-Monito.svg" alt="Monito's Logo" />
    <ListMenu class=" hidden lg:flex"/>
    <div class=" hidden lg:flex gap-3">
      <div class="bg-white flex gap-3 rounded-full px-3 py-3 items-center h-11">
        <img src="/src/assets/icons/search-icon.svg" alt="search icon" />
        <input
          type="text"
          class="min-w-60 w-fit border-none outline-none flex items-center bg-transparent text-start text-sm text-[#99A2A5]"
          placeholder="Search something here!"
        />
      </div>
      <RoundedButton
        label="Join the community"
        weight="bold"
      />
    </div>

    <div class="hidden lg:flex item-center gap-1 cursor-pointer">
      <img src="/src/assets/icons/VND.svg" alt="flag" />
      <span>VND</span>
      <img src="/src/assets/icons/Caret_Down_SM.svg" alt="chevron" />
    </div>

    <img v-if="!searchBar" class="lg:hidden cursor-pointer" @click="searchBar = !searchBar" src="/src/assets/icons/search-icon2.svg" alt="search-icon">

    <div ref="target" v-if="searchBar" class="bg-white lg:hidden flex gap-3 rounded-full px-3 py-3 items-center h-11 fixed top-1 left-1 right-1">
        <img src="/src/assets/icons/search-icon.svg" alt="search icon" />
        <input
          type="text"
          class="w-full border-none outline-none flex items-center bg-transparent text-start text-sm text-[#99A2A5]"
          placeholder="Search something here!"
        />
      </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import RoundedButton from "../RoundedButton.vue";
import ListMenu from "./ListMenu.vue";
import { onClickOutside } from '@vueuse/core'

const searchBar = ref(false)
const target = ref(null)

onClickOutside(target, event => searchBar.value = false)
</script>

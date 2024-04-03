<template>
  <section
    id="Banner"
    class="w-full h-fit bg-foreground lg:px-large-page px-4 lg:pt-[30px] pt-5 relative z-0 overflow-y-hidden"
  >
    <Navbar class="z-10" />
    <div class="flex flex-col lg:flex-row items-center gap-8 ">
      <div class=" basis-5/12 relative">
        <h1 class=" relative">One more friend
            <div class=" -z-10 absolute bg-secondary rounded-3xl rotate-[25deg] w-16 -top-0 -left-2 aspect-square"></div>
        </h1>
        <h2>Thousands more fun!</h2>
        <p class=" text-neutral">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

       <div class=" flex gap-2 mt-8">
        <OutlinedButton out-line-color="border-primary" label="View Intro" icon="/src/assets/icons/Play_Circle.png"/>
        <RoundedButton bg-color="bg-primary" label="Explore Now" />
       </div>
    <BigSquare bg-color="bg-secondary" class=" hidden lg:block absolute bg-opacity-70 rotate-[-45deg] lg:bottom-[-785px] left-0"/>

      </div>
      <div class=" basis-7/12 relative">
        <img src="/src/assets/img/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated 1.png" alt="">
        <BigSquare bg-color="bg-primary" class=" absolute rotate-[10deg] lg:bottom-[-225px] bottom-[-395px] left-6"/>
    <BigSquare bg-color="bg-secondary" class="w-[645px] absolute rotate-[20deg] lg:bottom-[-205px] bottom-[-375px] left-16"/>
      </div>
    </div>
    
    <BigSquare bg-color="bg-secondary" class="rotate-[25deg] lg:top-[-557px] top-[-627px] left-[-234px] absolute"/>
  </section>
</template>

<script lang="ts" setup>
import Navbar from "@/components/navbar/Navbar.vue";
import RoundedButton from "./RoundedButton.vue";
import OutlinedButton from "./OutlinedButton.vue";
import BigSquare from "./background/BigSquare.vue";
</script>

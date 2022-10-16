<script setup lang="ts">
import {ref} from 'vue'

let bgImgUrl = ref<string>('https://images.unsplash.com/photo-1501520158826-76df880863a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')

</script>

<template>
    <section class="relative lg:h-128 w-full bg-cover bg-center">
        <img
         :src="bgImgUrl"
         class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <div class="flex flex-row h-full items-center space-y-4 justify-center relative">
            <h1 class="text-5xl uppercase text-white leading-6 subpixel-antialiased font-light">
                Welcome to the Land scaping company 
            </h1>
        </div>
    </section>
</template>
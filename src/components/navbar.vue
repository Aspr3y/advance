<script setup lang="ts">

let Links = [
    {
        name:'Home',
        route:'/'
    },
    {
        name:'services',
        route:'/service'
    },
    {
        name:'booking',
        route:'/booking'
    },
    {
        name:'About Us',
        route:'/about'
    },
]

let RegisterLinks = [
    {
        name:'Login',
        route:'/login'
    },
    {
        name:'Sign Up',
        route:'/signup'
    }
]

</script>

<template>
    <div
     class="flex justify-between w-full py-4 px-6 bg-white"
    >

       <div
        class="flex space-x-8"
       >
        <router-link 
          v-for="link in Links" 
          :key="link.name" 
          :to="link.route"
          class="uppercase text-green-700 transition-all ease-in-out hover:bg-green-500 hover:text-white 
          py-1 px-2 rounded-tl-lg rounded-br-lg"
        >
            {{link.name}}
        </router-link>
       </div>

       <div
        class="flex space-x-8"
       >
            <router-link
                v-for="reg in RegisterLinks"
                :key="reg.name"
                :to="reg.route"
                class="uppercase text-green-700 transition-all ease-in-out hover:bg-green-500 
                hover:text-white py-1 px-4 rounded-tl-lg rounded-br-lg"
            >
                {{reg.name}}
            </router-link>
       </div>

    </div>
</template>
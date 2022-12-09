<script setup lang="ts">
import {ref} from 'vue'
//get this info from firebase authentication
let user = {
  email:'',
  username:'',
};
const landscapers = [
    'kallen22@stu.ncu.edu.jm'
];
if(landscapers.includes(user.email))
{
  //show landscapers stuff
}
else
{
  //show customer stuff
}
let bgImgUrl = ref<string>('https://images.unsplash.com/photo-1501520158826-76df880863a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')

function gotoBooking(this: any){
  this.$router.push('/service');
}

</script>

<template>
    <section class="relative lg:h-128 w-full bg-cover bg-center">
        <img
         :src="bgImgUrl"
         class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <div class="flex h-full items-center justify-between px-8 relative">

            <div class="flex flex-col justify-center items-center space-y-6">
             <h1 class="text-8xl text-green-500 uppercase leading-6 subpixel-antialiased font-light mb-4">
                Welcome
             </h1>
             <p class="text-3xl text-center uppercase text-white leading-loose subpixel-antialiased font-light">
                to the landscaping company here we provide
                Quality landscaping with reliable service.
             </p>
             <button 
              class="mt-4 bg-green-500 px-16 py-2 rounded-md uppercase leading-6 subpixel-antialiased
              text-white transition-all ease-in hover:bg-white hover:text-green-600 hover:rounded-3xl"

             >
               <router-link to="/service">Book today</router-link>
             </button>
            </div>
           
        </div>

    </section>
</template>
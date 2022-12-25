<script setup lang="ts">
import {ref} from 'vue';
import { getAuth, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref<string>("");
const password = ref<string>("");
const router = useRouter();

const register = () =>{

    if(email.value.length === 0 && password.value.length === 0){
        alert("Please ensure that all fields are filled")
    }else{
        createUserWithEmailAndPassword(getAuth(), email.value,password.value)
        .then( 
            (data) =>{
                console.log("Successfully registered!");
                router.push('/service')
            }
        ).catch( (error) =>{
            console.log(error.code);
            alert(error.message);
        });
    }
}

const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(),provider)
    .then( (result) =>{
        router.push('/booking')
    }).catch((err) =>{
        alert(err.message);
    })
} 
</script>

<template>
   <section
    class="flex w-full"
   >
        <div class="h-160 w-1/2 bg-green-200 py-16 px-8 flex flex-col space-y-8 justify-between items-center">
            
           <div class="flex flex-col justify-center items-center space-y-8 w-full">
                <h1 class="uppercase leading-6 subpixel-antialiased text-7xl text-green-500 
                font-medium">
                    Welcome
                </h1>
                <p class="uppercase leading-6 text-green-500 font-light">

                </p>
           </div>

           <div class="flex flex-col justify-center space-y-4 w-full h-full">
               <input
                 v-model="email"
                 type="email" 
                 class="transition-all placeholder-green-400 font-medium 
                  py-1 px-4 rounded-md focus:outline-none border-none ring-3
                 focus:ring-green-400 focus:ring-4 text-green-600"
                 placeholder="Please enter an email address"
               />

               <input
                 v-model="password"
                 type="password" 
                 class="transition-all placeholder-green-400 font-medium 
                  py-1 px-4 rounded-md focus:outline-none border-none ring-3
                 focus:ring-green-400 focus:ring-4 text-green-600"
                 placeholder="Please enter a password"
               />

               <h1 class="uppercase leading-6 subpixel-antialiased text-center
                text-2xl pt-2 text-green-600 font-medium">
                or
               </h1>

               <button
                @click="signInWithGoogle"
                class="bg-green-50 py-1 flex uppercase font-medium text-xl leading-6 subpixel-antialiased items-center 
                justify-center space-x-0 rounded-md transition-all ease-in-out hover:ring-4 hover:focus:ring-google-g1"
               >
                  <h1 class="text-google-g1">g</h1>
                  <h1 class="text-google-g2">o</h1>
                  <h1 class="text-google-g3">o</h1>
                  <h1 class="text-google-g1">g</h1>
                  <h1 class="text-google-g4">l</h1>
                  <h1 class="text-google-g2">e</h1>
               </button>
           </div>

           <div>
            <button
             v-on:click="register"
             class="bg-green-500 w-full px-28 py-2 text-white uppercase
              transition-all ease-in-out hover:rounded-xl hover:bg-white
              hover:text-green-500"
            >
                Create  an Account
            </button>
           </div>

        </div>

        <div class="h-160 w-1/2 bg-green-50 flex flex-col space-y-6 justify-center items-center">
            <img
             class="w-full h-160 object-cover"
             src="/signUpImg.jpg"
            />
        </div>
   </section>
</template>
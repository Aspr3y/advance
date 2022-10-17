<script setup lang="ts">
import {ref} from 'vue';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
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
    
} 
</script>

<template>
   <section
    class="flex w-full"
   >
        <div class="h-160 w-1/2 bg-indigo-400 py-16 px-8 flex flex-col space-y-8 justify-between items-center">
            
           <div class="flex flex-col justify-center items-center space-y-8 w-full">
                <h1 class="uppercase leading-6 text-7xl text-white font-light">
                    Welcome
                </h1>
                <p class="uppercase leading-6 text-white font-light">
                    Lorem ipsum
                </p>
           </div>

           <div class="flex flex-col justify-center space-y-4 w-full h-full">
               <input
                 v-model="email"
                 type="email" 
                 class="transition-all placeholder-gray-400 font-semibold 
                  py-1 px-4 rounded-md focus:outline-none border-none ring-3
                 focus:ring-indigo-400 focus:ring-4 text-green-600"
                 placeholder="Please enter an email address"
               />

               <input
                 v-model="password"
                 type="password" 
                 class="transition-all placeholder-gray-400 font-semibold 
                  py-1 px-4 rounded-md focus:outline-none border-none ring-3
                 focus:ring-indigo-400 focus:ring-4 text-green-600"
                 placeholder="Please enter a password"
               />
           </div>

           <div>
            <button
             v-on:click="register"
             class="bg-green-500 w-full px-28 py-2 rounded text-white uppercase
             transition-all ease-in hover:rounded-xl hover:bg-white hover:text-indigo-500"
            >
                Create  an Account
            </button>
           </div>

        </div>

        <div class="h-160 w-1/2 bg-green-50 flex flex-col space-y-6 justify-center items-center">
            <img
             class="w-full h-160 object-cover"
             src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            />
        </div>
   </section>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref<string>("");
const password = ref<string>("");
const errMsg = ref("")
const router = useRouter();

const login = () =>{

if(email.value.length === 0 && password.value.length === 0){
    alert("Please ensure that all fields are filled")
}else{
  signInWithEmailAndPassword(getAuth(), email.value,password.value)
    .then( 
        (data) =>{
            console.log("Successfully registered!");
            router.push('/service')
        }
    ).catch( (error) =>{
        switch(error.code){
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
           errMsg.value = "No account with that email was found";
           break;
          case "auth/wrong-password":
            errMsg.value = "Incorrect password";
            break;
          default:
            errMsg.value = "Email or password was incorrect"
            break;
        }
    });
}
}
</script>

<template>
    <section
    class="flex w-full"
   >
        <div class="h-160 w-1/2 bg-green-400 py-16 px-8 flex flex-col space-y-8 justify-between items-center">
            
           <div class="flex flex-col justify-center items-center space-y-8 w-full">
                <h1 class="uppercase leading-6 text-7xl text-white font-light">
                    Welcome Back
                </h1>
                <p class="uppercase leading-6 text-white font-light">
                    Lorem ipsum
                </p>
           </div>
          
           <div v-if="errMsg">
             <p
              class="uppercase text-2xl leading-6 text-gray-700"
             >
              {{errMsg}}
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
             @click="login"
             class="bg-indigo-400 w-full px-28 py-2 rounded text-white uppercase
             transition-all ease-in hover:rounded-xl hover:bg-white hover:text-indigo-500"
            >
               Login
            </button>
           </div>

        </div>

        <div class="h-160 w-1/2 bg-green-50 flex flex-col space-y-6 justify-center items-center">
            <img
             class="w-full h-160 object-cover"
             src="https://images.unsplash.com/photo-1663856542320-639f788ac5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
        </div>
   </section>
</template>
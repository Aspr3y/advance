<script setup lang="ts">
import {ref} from 'vue';
import {getAuth, 
  signInWithEmailAndPassword,  
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
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

const loginWithGoogle = () =>{
  const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(),provider)
    .then( (result) =>{
        router.push('/')
    }).catch((err) =>{
        alert(err.message);
  });
}
</script>

<template>
    <section
    class="flex w-full"
   >
        <div class="h-160 w-1/2 bg-green-300 py-16 px-8 flex flex-col space-y-8 justify-between items-center">
            
           <div class="flex flex-col justify-center items-center space-y-8 w-full">
                <h1 class="uppercase leading-6 subpixel-antialiased text-7xl text-green-500 
                  font-light">
                    Welcome Back
                </h1>
                <p class="uppercase leading-6 font-light text-green-700">
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
                 class="transition-all placeholder-green-400 font-medium  
                  py-1 px-4 rounded-md focus:outline-none border-none ring-3
                 focus:ring-indigo-400 focus:ring-4 text-green-600"
                 placeholder="Please enter an email address"
               />

               <input
                 v-model="password"
                 type="password" 
                 class="transition-all placeholder-green-400 font-medium 
                  py-1 px-4 rounded-md focus:outline-none border-none ring-3
                 focus:ring-indigo-400 focus:ring-4 text-green-600 "
                 placeholder="Please enter a password"
               />

               <h1
                class="text-center text-2xl font-medium leading-6 subpixel-antialiased
                text-green-600 uppercase mt-4"
               >
                or
               </h1>

               <button
                @click="loginWithGoogle"
                class="bg-green-50 py-1 flex uppercase text-xl leading-6 subpixel-antialiased items-center 
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
             @click="login"
             class="bg-indigo-500 w-full px-28 py-2 rounded text-white uppercase
             transition-all ease-in hover:bg-green-50 hover:text-green-600 hover:rounded-3xl"
            >
               Login
            </button>
           </div>

        </div>

        <div class="h-160 w-1/2 bg-green-50 flex flex-col space-y-6 justify-center items-center">
            <img
             class="w-full h-160 object-cover"
             src="/LogImg.jpg"
            />
        </div>
   </section>
</template>
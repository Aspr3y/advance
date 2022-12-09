<script setup lang="ts">
 import {ref,onMounted} from 'vue';
 import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth';
 import { useRouter } from 'vue-router';
    
    const isLoggedIn = ref<boolean>(false);
    const router = useRouter();

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
      {
        name:'landscaper',
        route:'/landscaper'
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

    let auth:any;
    onMounted( () => {
        auth = getAuth();
        onAuthStateChanged( auth, (user) =>{
            if(user){
                isLoggedIn.value = true;
            }else {
                isLoggedIn.value = false
            }
        })
    })

    const handleSignOut = () =>{
        signOut(auth).then(()=>{
            router.push('/');
        })
    }
</script>

<template>
    <div
     class="flex justify-between w-full py-4 px-8 bg-white"
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

            <button
             @click="handleSignOut"
             v-if="isLoggedIn"
             class="flex space-x-1 justify-center items-center uppercase"
            >
                <svg 
                 xmlns="http://www.w3.org/2000/svg" fill="none" 
                 viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                 class="w-8 h-8 text-green-700"
                >
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                
                <h1 class="text-green-700">logOut</h1>
            </button>
       </div>

    </div>
</template>
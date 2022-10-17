<script setup lang="ts">
 import { useRouter } from 'vue-router';
 const router = useRouter();

 let Items = [
    {
        image:'/lan_img.jpeg',
        title:'Landscaping',
        price:'$5,500.50 JMD'
    },
    {
        image:'/water_img.jpeg',
        title:'Watering',
        price:'$5,500.50 JMD'
    },
    {
        image:'/lawn_img.jpeg',
        title:'Lawn care',
        price:'$5,500.50 JMD'
    },
    {
        image:'/clear_img.jpeg',
        title:'Garden Clearance',
        price:'$5,500.50 JMD'
    },
    {
        image:'/weed_img.jpeg',
        title:'Weed Whacking',
        price:'$5,500.50 JMD'
    },
    {
        image:'/gras_img.jpeg',
        title:'Grass Installation',
        price:'$5,500.50 JMD'
    },
 ]
 const handleCLick = () =>{ router.push("/booking")}
</script>

<template>
    <section 
     class="flex flex-col justify-center w-full py-16 px-12 space-y-4"
    >
        <h1>
            Our Services
        </h1>

        <div>
            <input 
              type="search"
              class="w-full py-1 px-4"
            />
        </div>

        <div
         class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4 py-8"
        >
            <div
             class="flex flex-col space-y-4 justify-center
             bg-white rounded-md shadow-md"
             v-for="item in Items" :key="item.image"
            >
                <img 
                 class="h-64 object-cover rounded-t-md" 
                 :src="item.image"
                />

                <h1 class="w-full text-center">
                    {{item.title}}
                </h1>

                <h1 class="w-full text-center  py-2">
                    {{item.price}}
                </h1>

                <div class="p-2">
                    <button 
                     @click="handleCLick"
                     class="w-full bg-indigo-400 uppercase text-white
                     rounded py-1 transition-all ease-in-out hover:bg-indigo-50 hover:text-indigo-400"
                    >
                        book today
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>
<script setup lang="ts">
 import { computed, ref } from "vue";
 import {BookingStore} from "../store"
 import { useRouter } from 'vue-router';

 const router = useRouter();
 const store = BookingStore();

 interface x{ image:string,title:string,price:string }

 let landscaper = ref("");
 let _arr = ref<x[]>([]);

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

 let Jhon_Items = [
   {
     image:'/lan_img.jpeg',
     title:'Landscaping',
     price:'$7,500.50 JMD'
   },
   {
     image:'/water_img.jpeg',
     title:'Watering',
     price:'$6,000.00 JMD'
   },
   {
     image:'/lawn_img.jpeg',
     title:'Lawn care',
     price:'$4,250.00 JMD'
   },
   {
     image:'/clear_img.jpeg',
     title:'Garden Clearance',
     price:'$4,500.50 JMD'
   },
   {
     image:'/weed_img.jpeg',
     title:'Weed Whacking',
     price:'$1,500.00 JMD'
   },
   {
     image:'/gras_img.jpeg',
     title:'Grass Installation',
     price:'$3,500.00 JMD'
   },
 ]

 let Carl_item =  [
   {
     image:'/lan_img.jpeg',
     title:'Landscaping',
     price:'$3,200.00 JMD'
   },
   {
     image:'/water_img.jpeg',
     title:'Watering',
     price:'$5,000.00 JMD'
   },
   {
     image:'/lawn_img.jpeg',
     title:'Lawn care',
     price:'$4,000.50 JMD'
   },
   {
     image:'/clear_img.jpeg',
     title:'Garden Clearance',
     price:'$8,000.00 JMD'
   },
   {
     image:'/weed_img.jpeg',
     title:'Weed Whacking',
     price:'$2,500.00 JMD'
   },
   {
     image:'/gras_img.jpeg',
     title:'Grass Installation',
     price:'$3,400.00 JMD'
   },
 ]

 const  Prices = computed( ()=>{
   let arr = [] as x[]
     if( landscaper.value === ''){
       _arr.value = arr
       return arr;
     }else{
       if( landscaper.value === 'Johnson'){
         _arr.value = Jhon_Items;
         return  Jhon_Items;
       }else{
         if(landscaper.value === 'Carl'){
           _arr.value = Carl_item;
           return  Carl_item;
         }else{
           _arr.value = Items;
           return Items;
         }
       }
     }
 });

 function handleCLick(item:x){
   store.setSate(item,landscaper.value);
   router.push("/booking")
 }
</script>

<template>
    <section 
     class="flex flex-col justify-center w-full py-16 px-12 space-y-4"
    >
        <h1>
        Our Services
        </h1>

        <div>
          <select v-model="landscaper" class="w-full py-1 px-4 space-y-4">
            <option value="" disabled selected>
              Please select a Landscaper
            </option>
            <option value="Johnson">Johnson</option>
            <option value="Carl">Carl</option>
            <option value="Mark">Mark</option>
          </select>
        </div>

        <div
         class="w-full grid lg:grid-cols-3 grid-cols-1 gap-4 py-8"
        >
            <div
             class="flex flex-col space-y-4 justify-center
             bg-white rounded-md shadow-md"
             v-for="item in Prices" :key="item.image"
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
                     @click="handleCLick(item)"
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
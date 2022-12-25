<script setup lang="ts">
 import {computed} from "vue";
 import {BookingStore} from "../store"
 import { useFirestore } from 'vuefire'
 import firebase from "firebase/compat";

 interface x{ image:string,title:string,price:string }

 const store = BookingStore();

 const  getInfo = computed(()=>{
   return store.getBooking as x;
 })

 const getName = computed(()=>{
   return store.getName;
 })

 function SaveData(){
   // Error
  //  firebase.firestore.Collection('Booking', getInfo.value);
 }
</script>

<template>
    <div class="py-8 px-4">
        <h1 class="text-4xl font-semibold underline">
        </h1>
      <br/>
      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
          <input type="datetime-local"
                 class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 placeholder="Select a date" />
          <label for="floatingInput" class="text-gray-700">Select a date</label>
          <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
            <i class="fas fa-calendar datepicker-toggle-icon"></i>
          </button>
        </div>
      </div>




     <div class="flex flex-col w-full py-8 px-2 space-y-4">

       <h1>
         {{getName}}
       </h1>

       <div class="rounded bg-white px-2 py-4 space-y-4 flex flex-col">

        <h1 class="uppercase">
          Service: {{getInfo.title}}
        </h1>

        <h1 class="uppercase">
         Price: {{getInfo.price}}
        </h1>

       </div>



     </div>
    </div>

  <!-- Button trigger modal -->
  <button type="button" class="px-6
      py-2.5
      bg-green-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-600 hover:shadow-lg
      focus:bg-green-600-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-600 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">

    Confirm
  </button>

  <!-- Modal -->
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
       id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">  Your Appointment Has been booked</h5>
          <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body relative p-4">
          Would you like to select another Service ?.
        </div>



        <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
          <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal"><router-link to="/home">No</router-link></button>

          <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150

      ml-1"><router-link to="/service">Yes</router-link></button>
        </div>
      </div>
    </div>
  </div>





</template>


import { defineStore } from 'pinia'

type booking = { image:string,title:string,price:string }

export const BookingStore = defineStore(
    'Booking',
    {
         state: () => ({
             obj: {} as booking,
             name: ''
         }),
         getters:{
             getBooking: (state) => state.obj,
             getName: (state) => state.name
         },
         actions:{
             setSate(item:booking,name:string){
                 this.obj = item;
                 this.name = name;
             }
         }
    }
)
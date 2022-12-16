import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAuq5GHQznHGHomSfa74wRV7c6wxN53wZI",
    authDomain: "landscaping-680e5.firebaseapp.com",
    projectId: "landscaping-680e5",
    storageBucket: "landscaping-680e5.appspot.com",
    messagingSenderId: "987920024053",
    appId: "1:987920024053:web:51b0ac11289695980220bc"
});

const db = getFirestore();

export const Booking = collection(db, 'Booking')

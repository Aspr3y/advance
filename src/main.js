import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'tw-elements';
import { createPinia } from 'pinia'


const app = createApp(App);
const pinia = createPinia();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuq5GHQznHGHomSfa74wRV7c6wxN53wZI",
    authDomain: "landscaping-680e5.firebaseapp.com",
    projectId: "landscaping-680e5",
    storageBucket: "landscaping-680e5.appspot.com",
    messagingSenderId: "987920024053",
    appId: "1:987920024053:web:51b0ac11289695980220bc"
};

initializeApp(firebaseConfig);

app.use(pinia)
app.use(router)
app.mount('#app')

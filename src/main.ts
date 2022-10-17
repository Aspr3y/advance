import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3g1_T1Gt-UiBUQBRGGQZGJrpmKw5Lr8",
  authDomain: "landscape-7112d.firebaseapp.com",
  projectId: "landscape-7112d",
  storageBucket: "landscape-7112d.appspot.com",
  messagingSenderId: "33225187589",
  appId: "1:33225187589:web:9d146460374f616b1d176c"
};

initializeApp(firebaseConfig);

app.use(pinia)
app.use(router)
app.mount('#app')
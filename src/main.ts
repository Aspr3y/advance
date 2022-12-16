import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'tw-elements';
import { createPinia } from 'pinia'
import { firebaseApp } from "./FireBase/firebase";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use( firebaseApp )
app.mount('#app')
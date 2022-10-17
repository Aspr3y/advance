import { 
    createWebHistory, 
    createRouter, 
    RouteRecordRaw  
} from 'vue-router'
import homepage from '../pages/HomePage.vue'
import servicePage from '../pages/ServicePage.vue'
import bookingPage from '../pages/BookingPage.vue'
import aboutPage from '../pages/AboutPage.vue'
import signUpPage from '../pages/SignUp.vue'
import LoginPage from '../pages/LogIn.vue'

const routes: Array<RouteRecordRaw>  = [
   {
    path:'/',
    name:'home',
    component: homepage
   },
   {
    path:'/service',
    name:'service',
    component: servicePage
   },
   {
    path:'/booking',
    name:'booking',
    component: bookingPage
   },
   {
    path:'/about',
    name:'about',
    component: aboutPage
   }
   ,
   {
    path:'/login',
    name:'login',
    component: LoginPage
   },
   {
    path:'/signup',
    name:'signup',
    component: signUpPage
   }
];

const router = createRouter({history:createWebHistory(),routes})

export default router;
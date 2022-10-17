import { 
    createWebHistory, 
    createRouter, 
    RouteRecordRaw  
} from 'vue-router'
import { getAuth,onAuthStateChanged } from 'firebase/auth';
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
    component: bookingPage,
     meta:{ requiresAuth:true }
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

const getCurrentUser = () =>{
    return new Promise( (resolve,reject) =>{
        const removeListener = onAuthStateChanged( 
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    });
};

router.beforeEach( async (to,from,next) =>{
    if(to.matched.some((record) => record.meta.requiresAuth)){

        if(await getCurrentUser()){
            next()
        }else{
            alert("You don't have access!");
            next('/');
        }
    }else{
        next();
    }
})

export default router;
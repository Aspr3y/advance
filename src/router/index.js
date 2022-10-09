import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'
import Services from "@/views/Services";
import Booking from "@/views/Booking";
Vue.use(VueRouter)
UIkit.use(Icons);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }

  },

  {
    path:'/Services',
    name:'Services',
    component:Services
  },
  {
    path:'Booking',
    name:'Booking',
    component:Booking
  }

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import register from '../components/register.vue'
import about from '../components/about.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home.vue'
import contactus from '../components/contactus.vue'
import categories from '../components/categories.vue'
import Test from '../components/Test.vue'
import detail from '../components/detail.vue'
import forgetPassword from '../components/forgetPassword.vue'
import profile from '../components/profile.vue'
import sidebar from '../components/sidebar.vue'
import profileD from '../components/profileD.vue'
import Inbox from '../components/Inbox.vue'
import systemSe from '../components/systemSe.vue'
import rightSideBar from '../components/rightSideBar.vue'
import trash from '../components/trash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HelloWorld',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '/trash',
    name: 'trash',
    component: trash
  },
  {
    path: '/rightSideBar',
    name: 'rightSideBar',
    component: rightSideBar
  },
  {
    path: '/profileD',
    name: 'profileD',
    component: profileD
  },
  {
    path: '/Inbox',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/systemSe',
    name: 'systemSe',
    component: systemSe
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: sidebar
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: forgetPassword
  },
  
  {
    path:'/regiter',
    name:'register',
    component: register
  },
  {
    path:'/about',
    name:'about',
    component: about
  },
  {
    path:'/detail',
    name:'detail',
    component: detail
  },
  {
    path:'/categories',
    name:'categories',
    component: categories
  },
  
  {
    path:'/profile',
    name:'profile',
    component: profile
  },
  {
    path:'/home',
    name:'home',
    component: Home
  },{
    path:'/contactus',
    name:'contactus',
    component: contactus
  },{path:'/Test',
     name:'Test',component: Test   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

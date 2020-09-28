import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Meeting from '../views/MeetingView.vue'
import Login from '../views/Login.vue'
import MyMeetings from '../views/MyMeetings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/home/:id',
    name: 'Signup',
    component: Home,
  },
  {
    path: '/meeting/:id/:user',
    name: 'Meeting',
    component: Meeting,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/mymeetings/:user',
    name: 'My Meetings',
    component: MyMeetings,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

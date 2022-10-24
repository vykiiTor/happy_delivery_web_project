import { createRouter, createWebHistory } from 'vue-router'
const Home = window.httpVueLoader('./components/Home.vue')
const Panier = window.httpVueLoader('./components/Panier.vue')
const Login = window.httpVueLoader('./components/Login.vue')



const routes = [
  { path: '/home', component: Home},
  { path: '/panier', component: Panier },
  { path: '/', component: Login }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

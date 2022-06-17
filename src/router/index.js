import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatalogList from "@/views/CatalogList";
import CatalogDetail from "@/views/CatalogDetail";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: CatalogList
  },
  {
    path: '/list/:id',
    name: 'detail',
    component: CatalogDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

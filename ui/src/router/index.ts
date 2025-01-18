import { createRouter, createWebHistory } from 'vue-router'

import ArticleView from '@/views/ArticleView.vue'
import BlogView from '@/views/BlogView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:article',
      name: 'article',
      component: ArticleView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router

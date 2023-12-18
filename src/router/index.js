import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/MainPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostPage from '@/pages/PostPage.vue'
import PostIdPage from '@/pages/PostIdPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: Main
    },
    {
      path: '/posts',
      component: PostsPage
    },
    {
      path: '/posts/:id',
      component: PostPage
    },
    {
      path: '/tutor/:id',
      component: PostIdPage
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/MainPage.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostPage from '@/pages/PostPage.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import PostPageWithStore from '@/pages/PostPageWithStore.vue'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi.vue'

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
    {
      path: '/store',
      component: PostPageWithStore
    },
    {
      path: '/compositionApi',
      component: PostPageCompositionApi
    },
  ]
})

export default router

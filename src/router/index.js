import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaylistView from '../views/PlaylistView.vue'
import PlaylistCeleste from '../views/PlayListView1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistView,
    },
    {
      path: '/playlist1',
      name: 'playlist1',
      component: PlaylistCeleste,
    },
  ],
})

export default router

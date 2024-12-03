import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaylistView from '../views/PlaylistView.vue'
import PlayListCelesteView from '../views/PlayListCelesteView.vue'

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
      path: '/playlistCeleste',
      name: 'playlistCeleste',
      component: PlayListCelesteView,
    },
    // {
    //   path: '/playlistOphelia',
    //   name: 'playlistOphelia',
    //   component: PlayListOpheliaView,
    // },
    // {
    //   path: '/playlistSabine',
    //   name: 'playlistSabine',
    //   component: PlayListSabineView,
    // },
    // {
    //   path: '/playlistLouis',
    //   name: 'playlistLouis',
    //   component: PlayListLouisView,
    // },
  ],
})

export default router

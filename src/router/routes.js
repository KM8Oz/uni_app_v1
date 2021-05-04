

import { Platform } from 'quasar';
import cookies from "js-cookie";
const ssid = cookies.get("ssid");
const redirect =(s)=> ssid ? s : import("pages/desktop/login.vue");
const routes = Platform.is.desktop ? [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/desktop/index.vue') },
      { path: 'plan', component: () => import('pages/desktop/programma') },
      { path: 'support', component: () => import('pages/desktop/support')},
      { path: 'books', component: () => import('pages/desktop/books')},
      { path: 'videos', component: () => import('pages/desktop/videos') },
      { path: 'chat', component: () => import('pages/desktop/chat') },
      { path: 'articles', component: () => import('pages/desktop/articles') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]: 
[
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mobile/index.vue') },
      { path: 'plan', component: () => import('pages/mobile/programma') },
      { path: 'support', component: () => import('pages/mobile/support') },
      { path: 'books', component: () => import('pages/mobile/books') },
      { path: 'videos', component: () => import('pages/mobile/videos') },
      { path: 'chat', component: () => import('pages/mobile/chat') },
      { path: 'articles', component: () => import('pages/mobile/articles') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

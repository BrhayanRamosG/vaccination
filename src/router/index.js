import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBaseView from '../views/DataBaseView.vue'
import EduacationView from '../views/EduacationView.vue'
import NewsView from '../views/NewsView.vue'
import RegulationView from '../views/RegulationView.vue'
import HoaxBuxterView from '../views/HoaxBuxterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Vaccination',
      component: HomeView
    },
    {
      path: '/database',
      name: 'database',
      component: DataBaseView
    },
    {
      path: '/education',
      name: 'education',
      component: EduacationView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/regulation',
      name: 'regulation',
      component: RegulationView
    },
    {
      path: '/hoax-buxter',
      name: 'hoaxbuxter',
      component: HoaxBuxterView
    }
  ]
})

export default router

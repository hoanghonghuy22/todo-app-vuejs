import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskDetailsView from '../views/TaskDetailsView.vue'
import TasksView from '../views/TasksView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView
  },
  {
    path: '/tasks/:id',
    name: 'task-details',
    component: TaskDetailsView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

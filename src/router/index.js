import { createRouter, createWebHistory } from 'vue-router';

import Variations from '../Views/Variations.vue'

const routes = [
    {
      path: '/variations',
      name: 'Home',
      component: Variations
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
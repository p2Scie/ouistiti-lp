import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Survey from '@/views/Survey.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/survey', component: Survey},
    ],
    linkActiveClass: 'active'
});


export default router
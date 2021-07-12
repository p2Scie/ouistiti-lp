import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Pending from '@/views/Pending.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/pending', component: Pending},
        { path: '/about', component: About , redirect: '/pending'},
        { path: '/contact', component: Contact , redirect: '/pending' },
    ],
    linkActiveClass: 'active'
});


export default router
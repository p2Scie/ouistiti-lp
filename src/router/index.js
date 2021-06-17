import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Article from '@/views/Article.vue';
import Contact from '@/views/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/about', component: About },
        { path: '/article', component: Article },
        { path: '/contact', component: Contact },
    ],
    linkActiveClass: 'active',
    base: '/ouistiti-lp/'
});


export default router
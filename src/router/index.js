import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Pending from '@/views/Pending.vue';
import LegalNotices from '@/views/compliance/LegalNotices.vue';
import PrivacyPolicy from '@/views/compliance/PrivacyPolicy.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/pending', component: Pending},
        { path: '/about', component: About , redirect: '/pending'},
        { path: '/contact', component: Contact },
        { path: '/legal', component: LegalNotices},
        { path: '/privacy', component: PrivacyPolicy},
    ],
    linkActiveClass: 'active'
});


export default router
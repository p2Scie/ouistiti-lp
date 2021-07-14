import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Welcome from '@/views/Welcome.vue';
import Catalog from '@/views/Catalog.vue';
import Survey from '@/views/Survey.vue';
import store from '../store/index.js'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Welcome, meta: { requiresUnauth: true } },
        { path: '/home', component: Home, meta: { requiresAuth: true } },
        { path: '/survey', component: Survey},
        { path: '/catalog', component: Catalog},
       
    ],
    linkActiveClass: 'active'
});

router.beforeEach(function(to, _, next) {
    //si l'acces necessite d'être connecté et qu'on ne l'est pas
    if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
        //redirection
        next('/');
        //si l'acces ne necessite pas d'être connecté mais qu'on l'est
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        //redirect
        next('/home')
    } else {
        next();
    }
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/values',
            name: 'values',
            component: () => import('../views/ValuesView.vue'),
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import('../views/SkillsView.vue'),
        },
        {
            path: '/flaws',
            name: 'flaws',
            component: () => import('../views/FlawsView.vue'),
        },
        {
            path: '/posts',
            name: 'posts',
            component: () => import('../views/PostsView.vue'),
        },
        {
            path: '/posts/:name',
            name: 'posts_named',
            component: () => import('../views/SinglePostView.vue'),
        },
    ],
});

export default router;

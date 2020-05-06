import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/catalog/:categoryId',
        name: 'Catalog',
        component: Catalog,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = new VueRouter({
    routes,
});

export default router;

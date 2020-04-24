import VueRouter from 'vue-router';
import PageA from './pages/PageA.vue';
import PageB from './pages/PageB.vue';
import PageC from './pages/PageC.vue';
import PageD from './pages/PageD.vue';
import PageNotFound from './pages/PageNotFound.vue';

const routes = [{
    name: 'PageA',
    path: '/page-a',
    component: PageA,
}, {
    name: 'PageB',
    path: '/page-b',
    component: PageB,
}, {
    name: 'PageC',
    path: '/page-c',
    component: PageC,
}, {
    name: 'PageD',
    path: '/page-d/:message',
    component: PageD,
}, {
    path: '*',
    component: PageNotFound,
}];

const router = new VueRouter({
    routes,
});

export default router;

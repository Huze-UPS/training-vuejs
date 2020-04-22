import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
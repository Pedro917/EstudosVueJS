import Vue from 'vue';
import Router from 'vue-router';
import Usuarios from '../components/Usuarios.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Usuarios',
      component: Usuarios,
    },
  ],
});
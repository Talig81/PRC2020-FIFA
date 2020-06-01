import Vue from 'vue';
import Router from 'vue-router';
import Inicial from '../components/PaginaInicial.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicial',
      component: Inicial
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
});

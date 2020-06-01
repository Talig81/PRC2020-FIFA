import Vue from 'vue';
import Router from 'vue-router';
import Inicial from '../components/PaginaInicial.vue';
import Registo from '../components/Registo.vue';
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
      path: '/register',
      name: 'registo',
      component: Registo
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
});

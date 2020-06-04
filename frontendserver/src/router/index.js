import Vue from 'vue';
import Router from 'vue-router';
import Inicial from '../components/PaginaInicial.vue';
import Registo from '../components/Registar.vue';
import Login from '../components/Login.vue';
import Jogadores from '../components/ListaJogadores.vue';


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
      path: '/players',
      name: 'jogadores',
      component: Jogadores
    },
  ]
});

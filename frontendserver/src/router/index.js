import Vue from 'vue';
import Router from 'vue-router';
import Inicial from '../components/PaginaInicial.vue';
import Registo from '../components/Registar.vue';
import Login from '../components/Login.vue';
import CriarEquipa from '../components/CriarEquipa.vue';

import Jogadores from '../components/ListaJogadores.vue';
import ConsultarJogador from '../components/PaginaJogador.vue'


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
    {
      path: '/teams/create',
      name: 'criar_equipas',
      component: CriarEquipa
    },
    {
      path: '/players/consult',
      name: 'consultar_jogador',
      component: ConsultarJogador
    }
  ]
});

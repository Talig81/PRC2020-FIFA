import Vue from 'vue';
import Router from 'vue-router';
import Inicial from '../components/PaginaInicial.vue';
import Registo from '../components/Registar.vue';
import Login from '../components/Login.vue';
import CriarEquipa from '../components/CriarEquipa.vue';
import Teste from '../components/Teste.vue'
import Jogadores from '../components/ListaJogadores.vue';
import ConsultarJogador from '../components/PaginaJogador.vue'
import Perfil from '../components/Perfil.vue'
import MinhasEquipas from '../components/MinhasEquipas.vue'
import Field from '../components/Field.vue'
import Equipa from '../components/Equipa.vue'
import Ranking from '../components/Ranking.vue'
import League from '../components/League.vue'
import LeagueList from '../components/LeagueList.vue'
import LeagueDetails from '../components/LeagueDetails.vue'
import store from '../store/modules/token';

Vue.use(Router);
// função para as rotas protegidas! basicamente so verifica se tem o token. temos que progredir para validar o token porque pode ja tar expirado
const isAuthenticated = (to, from, next) => {
  if (store.state.token != null) {
    next()
    return
  }
  next('/')
}
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
      component: CriarEquipa,
      beforeEnter: isAuthenticated
    },
    {
      path: '/teams/view/:name',
      name: 'consultar_equipa',
      component: Equipa,
      beforeEnter: isAuthenticated
    },
    {
      path: '/registar',
      name: 'registar',
      component: Registo
    },
    {
      path: '/players/consult/:player',
      name: 'consultar_jogador',
      component: ConsultarJogador,
      beforeEnter: isAuthenticated
    },
    {
      path: '/teste',
      name: 'teste',
      component: Teste,
      beforeEnter: isAuthenticated
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Perfil,
      beforeEnter: isAuthenticated
    },
    {
      path: '/teams',
      name: 'teams',
      component: MinhasEquipas,
      beforeEnter: isAuthenticated
    },
    {
      path: '/field',
      name: 'field',
      component: Field,
      beforeEnter: isAuthenticated
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
      beforeEnter: isAuthenticated
    }
    ,
    {
      path: '/leagueList',
      name: 'leaguelist',
      component: LeagueList,
      beforeEnter: isAuthenticated
    },
    {
      path: '/league/:name',
      name: 'league',
      component: League,
      beforeEnter: isAuthenticated
    },
    {
      path: '/league/details/:name',
      name: 'details',
      component: LeagueDetails,
      beforeEnter: isAuthenticated
    }
  ]
});

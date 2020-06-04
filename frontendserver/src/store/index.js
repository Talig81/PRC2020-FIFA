import Vuex from 'vuex'
import Vue from 'vue'
import token from './modules/token'



//Load Vuex
Vue.use(Vuex)

//Create Store
export default new Vuex.Store({
    modules: {
        token
    }
})
const state = {
    token: localStorage.getItem('access_token') || null , 
}

const getters = {
    getToken: state => state.token,
    loggedIn: state => {
        return state.token != null
    },
}



const mutations = {
    setToken: (state, token) => {state.token = token;localStorage.setItem('access_token',token)},
    removeToken: (state) => {localStorage.removeItem('access_token');state.token = null;}
}

export default {
    state,
    getters,
    mutations
}
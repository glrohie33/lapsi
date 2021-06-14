import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: '',
        role: '',
        permissions: '',
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
        drawer: null
    },
    mutations: {
        setUser(state, user)
        {
            state.user = user
        },
        setRole(state, role)
        {
            state.role = role
        },
        setPermissions(state, perm)
        {
            state.permissions = perm
        }, SET_BAR_IMAGE(state, payload)
        {
            state.barImage = payload
        },
        SET_DRAWER(state, payload)
        {
            state.drawer = payload
        },
    }
});

export default store;

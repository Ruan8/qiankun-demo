import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "",
        theme: "",
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_THEME(state, theme) {
            state.theme = theme;
        },
    },
});

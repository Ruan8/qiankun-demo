import Vue from "vue";
import Vuex from "vuex";
import { setState } from "@/microAppState";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        theme: "light",
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            setState((s) => {
                s.token = token;
                return s;
            });
        },
        SET_THEME(state, theme) {
            state.theme = theme;
            document.documentElement.className = theme === "dark" ? "dark" : "";
            setState((s) => {
                s.theme = theme;
                return s;
            });
        },
    },
});

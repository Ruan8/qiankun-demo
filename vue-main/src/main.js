import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "@/store";
import echarts from "@/echarts";
import { start } from "./qiankun";
import { initState } from "@/microAppState";

Vue.config.productionTip = false;
window.$echarts = echarts;

start();
initState();

// 增加系统主题色判断
const match = window.matchMedia("(prefers-color-scheme: dark)");
const changeTheme = (macthes) =>
    store.commit("SET_THEME", macthes ? "dark" : "light");
match.addEventListener("change", (e) => {
    changeTheme(e.matches);
});

changeTheme(match.matches);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

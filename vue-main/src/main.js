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

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

import "@/public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import routes from "@/router";
import store from "@/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);

let router = null;
let instance = null;
function render(props = {}) {
    const { container } = props;
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? "/vue2-sub/" : "/",
        mode: "history",
        routes,
    });

    instance = new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {}

export async function mount(props) {
    render(props);
    props.onGlobalStateChange((state) => {
        store.commit("SET_TOKEN", state.token);
        store.commit("SET_THEME", state.theme);
    }, true);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
    router = null;
}

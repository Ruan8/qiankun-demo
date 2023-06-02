import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import routes from "@/router";
import { useUser, useTheme } from "@/store";
import "./public-path.js";

let app = null;
let router = null;

function render(props = {}) {
    const { container, token } = props;
    router = createRouter({
        history: createWebHistory(
            window.__POWERED_BY_QIANKUN__ ? "/vue3-sub" : "/"
        ),
        routes,
    });

    app = createApp(App);
    app.use(router)
        .use(createPinia())
        .mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
    console.log("[vue] props from main framework", props);
    render(props);
    props.onGlobalStateChange((state) => {
        const user = useUser();
        const { setTheme } = useTheme();
        user.SET_TOKEN(state.token);
        setTheme(state.theme);
    }, true);
}

export async function unmount() {
    app.unmount();
    app._container.innerHTML = "";
    app = null;
    router = null;
}

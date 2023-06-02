import VueRouter from "vue-router";
import Vue from "vue";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("@/pages/Index"),
        },
        {
            path: "/login",
            component: () => import("@/pages/Login"),
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.path === "/login") {
        next();
    } else if (!store.state.token) {
        next({
            path: "/login",
            query: {
                p: to.path,
            },
        });
    } else {
        next();
    }
});

export default router;

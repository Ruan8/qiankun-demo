<template>
    <div id="app">
        <div class="menus">
            <div class="menus-main">
                <router-link
                    :to="item.path"
                    v-for="item in menus"
                    :key="item.name"
                    exact-active-class="link-active"
                    >{{ item.name }}</router-link
                >
            </div>
            <div class="theme" @click="themeChange">
                {{ $store.state.theme == "light" ? "🌞" : "🌃" }}
            </div>
        </div>
        <div class="container">
            <router-view></router-view>
            <div id="vue2-sub-container"></div>
            <div id="vue3-sub-container"></div>
            <div id="react-sub-container"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            menus: [
                {
                    path: "/",
                    name: "主应用",
                },
                {
                    path: "/vue2-sub",
                    name: "vue2-sub",
                },
                {
                    path: "/vue3-sub",
                    name: "vue3-sub",
                },
                {
                    path: "/react-sub",
                    name: "react-sub",
                },
            ],
        };
    },
    methods: {
        themeChange() {
            let theme = this.$store.state.theme;
            this.$store.commit(
                "SET_THEME",
                theme === "light" ? "dark" : "light"
            );
        },
    },
};
</script>

<style>
html {
    --color: #333;
    --bg-color: #fff;
}

html.dark {
    --color: #ffffffa6;
    --bg-color: #141414;
}

html,
body {
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    color: var(--color);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.menus {
    position: relative;
    width: 100%;
    height: 60px;
    box-shadow: 1px 0px 10px rgba(100, 100, 100, 0.16);
}

.menus-main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
}

.menus-main a {
    text-decoration: none;
    color: var(--color);
    margin-right: 40px;
}

.menus-main a.link-active {
    color: #7395f7;
}

.container {
    width: 1200px;
    min-height: calc(100vh - 60px - 40px);
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.16);
    border-radius: 4px;
}

.theme {
    position: absolute;
    top: 0;
    right: 50px;
    font-size: 30px;
    margin-top: 10px;
    cursor: pointer;
}
</style>

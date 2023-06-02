import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("user", {
    state: () => ({
        token: null,
    }),
    actions: {
        SET_TOKEN(token) {
            this.token = token;
        },
    },
});

export const useTheme = defineStore("theme", () => {
    const defaultTheme = ref(null);
    const setTheme = (theme) => {
        defaultTheme.value = theme;
    };
    return {
        theme: defaultTheme,
        setTheme,
    };
});

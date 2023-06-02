import { registerMicroApps, start } from "qiankun";

registerMicroApps(
    [
        {
            name: "vue2-sub",
            entry: "//localhost:8001",
            container: "#vue2-sub-container",
            activeRule: "/vue2-sub",
        },
        {
            name: "vue3-sub",
            entry: "//localhost:8002",
            container: "#vue3-sub-container",
            activeRule: "/vue3-sub",
        },
        {
            name: "react-sub",
            entry: "//localhost:8003",
            container: "#react-sub-container",
            activeRule: "/react-sub",
        },
    ],
    {
        beforeLoad() {},
        beforeMount() {},
    }
);
export { start };

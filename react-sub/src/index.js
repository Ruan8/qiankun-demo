import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "@/redux";

import "./index.css";
import "./public-path";

let root = null;
function render(props = {}) {
    const { container } = props;
    root = ReactDOM.createRoot(
        container
            ? container.querySelector("#root")
            : document.querySelector("#root")
    );
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {}

export async function mount(props) {
    render(props);

    props.onGlobalStateChange((state) => {
        store.dispatch({
            type: "SET_TOKEN",
            token: state.token,
        });
        store.dispatch({
            type: "SET_THEME",
            theme: state.theme,
        });
    }, true);
}

export async function unmount() {
    root.unmount();
    root = null;
}

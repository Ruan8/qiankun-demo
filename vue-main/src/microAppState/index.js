import { initGlobalState } from "qiankun";

let globalState = {
    token: null,
    theme: null,
};
let actions = null;

const setState = (callback) => {
    let newState = typeof callback === "function" && callback(globalState);
    globalState = newState || {};
    actions.setGlobalState(newState);
};

const initState = () => {
    actions = initGlobalState(globalState);
    actions.setGlobalState(globalState);
};

export { setState, initState };

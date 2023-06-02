import { legacy_createStore as createStore } from "redux";
import { produce } from "immer";

const defaultState = {
    token: "",
    theme: "",
};

const reducer = (state = defaultState, action) => {
    return produce(state, (draftState) => {
        switch (action.type) {
            case "SET_TOKEN":
                draftState.token = action.token;
                return draftState;
            case "SET_THEME":
                draftState.theme = action.theme;
                return draftState;
            default:
                return draftState;
        }
    });
};

export default createStore(reducer);

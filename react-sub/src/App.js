import { BrowserRouter } from "react-router-dom";
import Router from "@/router";

import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter
                basename={window.__POWERED_BY_QIANKUN__ ? "/react-sub" : "/"}
            >
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;

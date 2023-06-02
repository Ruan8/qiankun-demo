import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
];

const BaseRouter = () => {
    return useRoutes(routes);
};

export default BaseRouter;

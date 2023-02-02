import { createBrowserRouter } from "react-router-dom";
import NotFound from "./compononts/error/NotFound";
import Main from "./Main/main";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Main />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import NotFound from "./compononts/error/NotFound";
import Followers from "./compononts/Follower";
import User from "./compononts/User";
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
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;

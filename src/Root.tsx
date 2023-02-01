import { Outlet } from "react-router-dom";
import Header from "./compononts/Header";

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;

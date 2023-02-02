import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate("/about");
    };

    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <button onClick={onAboutClick}>Move</button>
                </li>
            </ul>
        </header>
    );
};

export default Header;

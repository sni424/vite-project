import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
// import { createGlobalStyle } from "styled-components";

// const  = createGlobalStyle<any>`
//     body {
//         color:  red;
//     }
// `;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

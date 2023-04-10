import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { createGlobalStyle } from "styled-components";

// const  = createGlobalStyle<any>`
//     body {
//         color:  red;
//     }
// `;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);

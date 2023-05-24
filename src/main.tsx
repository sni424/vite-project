import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>
);

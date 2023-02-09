import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
        </ThemeProvider> */}
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

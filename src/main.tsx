import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
const darkTheme = {
    textColor: "whiteSmoke",
    backgroundColor: "#111",
};

const lightTheme = {
    textColor: "#111",
    backgroundColor: "whiteSmoke",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

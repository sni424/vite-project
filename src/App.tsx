import { useState } from "react";
import { Route, Routes } from "react-router";

import Main from "./Main/main";
import Header from "./compononts/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router";

import Main from "./Main/main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}

export default App;

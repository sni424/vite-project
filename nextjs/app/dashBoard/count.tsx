"use client";

import { useState } from "react";

export default function Count() {
    const [state, setState] = useState(0);

    return (
        <div>
            {state}
            <button
                onClick={() => {
                    setState((prev) => prev + 1);
                }}
            >
                +
            </button>
        </div>
    );
}

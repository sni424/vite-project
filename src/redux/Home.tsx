import React, { useState } from "react";
import { addToDo } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ToDo from "./ToDo";

interface IToDo {
    id: number;
    text: string;
}

const Home = () => {
    const [text, setText] = useState("");
    function onChange(e: React.FormEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }
    const currentState = useSelector((state: IToDo[]) => state);
    const dispatch = useDispatch();
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {currentState.map((todoItem) => (
                    <ToDo key={todoItem.id} toDo={todoItem} />
                ))}
            </ul>
        </div>
    );
};

export default Home;

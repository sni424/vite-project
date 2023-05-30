import { useRecoilState, useRecoilValue } from "recoil";

import CreateToDos from "./CreateToDos";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import React from "react";

const ToDoList = () => {
    // const toDos = useRecoilValue(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, serCategory] = useRecoilState(categoryState);

    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        serCategory(e.currentTarget.value as any);
    };
    return (
        <div>
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDos />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
};

export default ToDoList;

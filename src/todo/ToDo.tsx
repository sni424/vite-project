import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
    const setToDos = useSetRecoilState(toDoState);
    const onChange = (newCategory: Categories) => {
        console.log(newCategory);
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldTodo = oldToDos[targetIndex];

            const newToDo: IToDo = {
                ...oldTodo,
                category: newCategory,
            };
            const newToDos = [...oldToDos];
            newToDos[targetIndex] = newToDo;
            return newToDos;
        });
    };

    return (
        <li>
            <span> {text}</span>
            <select
                defaultValue={category}
                onInput={(e) => onChange(e.currentTarget.value as any)}
            >
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
        </li>
    );
};

export default ToDo;

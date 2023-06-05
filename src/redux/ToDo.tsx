import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

type ToDoProps = {
    toDo: {
        text: string;
        id: number;
    };
};
const ToDo: React.FC<ToDoProps> = ({ toDo }) => {
    const dispatch = useDispatch();

    const deleteData = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const targetId = parseInt(e.target.parentNode.id);
        dispatch(deleteToDo(targetId));
    };

    return (
        <form>
            <Link to={`${toDo.id}`}>
                <li id={String(toDo.id)}>
                    * {toDo.text} <button onClick={deleteData}>Delete</button>
                </li>
            </Link>
        </form>
    );
};

export default ToDo;

import { useSelector } from "react-redux";
import { useParams } from "react-router";

interface ToDo {
    text: string;
    id: number;
}

const Detail = () => {
    const toDos = useSelector((state: ToDo[]) => state);
    const id = useParams();
    console.log(typeof id.id);
    const findToDo = toDos.find((data) => data.id === parseInt(id.id));
    console.log(findToDo);

    return (
        <div>
            <h1>{findToDo?.text}</h1>
            <h5>Created at : {findToDo?.id}</h5>
        </div>
    );
};

export default Detail;

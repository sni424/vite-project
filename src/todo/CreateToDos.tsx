import { useForm, SubmitHandler } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

const CreateToDos = () => {
    const setToDos = useSetRecoilState(toDoState);

    const { register, handleSubmit, formState, setValue } = useForm<IForm>();

    const onValid = ({ toDo }: IForm) => {
        setToDos((pre) => [
            { text: toDo, id: Date.now(), category: "TO_DO" },
            ...pre,
        ]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input
                {...register("toDo", {
                    required: "오늘할일을 적어주세요",
                })}
                placeholder="toDo"
            />
            {formState.errors.toDo?.message !== undefined
                ? `${formState.errors.toDo?.message}`
                : ""}
            <button>추가</button>
        </form>
    );
};

export default CreateToDos;

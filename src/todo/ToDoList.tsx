import { useState } from "react";

import { useForm } from "react-hook-form";
import {
    atom,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";

interface IForm {
    toDo: string;
    email: string;
    password: string;
    password1: string;
    extraError?: string;
}

interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

const ToDoList = () => {
    //useRecoilState함수는 toDos setToDos 함수를 반환 useState와 비슷
    const [toDos, setToDos] = useRecoilState(toDoState);
    // const toDos = useRecoilValue(toDoState);
    // const setToDos = useSetRecoilState(toDoState);
    const { register, watch, handleSubmit, formState, setError, setValue } =
        useForm<IForm>({
            defaultValues: {
                email: "@naver.com",
            },
        });
    const onValid = ({ toDo }: IForm) => {
        setToDos((pre) => [
            { text: toDo, id: Date.now(), category: "TO_DO" },
            ...pre,
        ]);
        setValue("toDo", "");
        // if (data.password !== data.password1) {
        //     setError(
        //         "password1",
        //         {
        //             message: "비밀번호가 서로 일치하지 않습니다.",
        //         },
        //         { shouldFocus: true }
        //     );
        // }
    };
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("toDo", {
                        required: "오늘할일을 적어주세요",
                    })}
                    placeholder="toDo"
                />
                {formState.errors.email?.message !== undefined
                    ? `${formState.errors.email?.message}`
                    : ""}
                <button>추가</button>
                <ul>
                    {toDos.map((data) => (
                        <li key={data.id}>{data.text}</li>
                    ))}
                </ul>
                {/* <input
                    {...register("email", {
                        required: "이메일을 적어주세요",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                        minLength: {
                            value: 5,
                            message: "5글자가 넘어야 합니다.",
                        },
                    })}
                    placeholder="Email"
                />
                {formState.errors.email?.message !== undefined
                    ? `${formState.errors.email?.message}`
                    : ""}
                <input
                    {...register("password", {
                        required: "write here",
                        minLength: {
                            value: 5,
                            message: "5글자 이상 적어주세요",
                        },
                        validate: (value) =>
                            value.includes("@")
                                ? "@는 사용이 불가능합니다."
                                : true,
                    })}
                    placeholder="Password"
                />
                {formState.errors.password?.message !== undefined
                    ? `${formState.errors.password?.message}`
                    : ""}
                <input
                    {...register("password1", {
                        required: "write here",
                        minLength: {
                            value: 5,
                            message: "5글자 이상 적어주세요",
                        },
                    })}
                    placeholder="Password1"
                />
                {formState.errors.password1?.message !== undefined
                    ? `${formState.errors.password1?.message}`
                    : ""} */}
            </form>
        </div>
    );
};

export default ToDoList;

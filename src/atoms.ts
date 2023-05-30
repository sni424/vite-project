import { atom, selector } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: true,
});

export enum Categories {
    "TO_DO",
    "DOING",
    "DONE",
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});

export const minuteState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector({
    key: "hour",
    get: ({ get }) => {
        const minute = get(minuteState);
        return minute / 60;
    },
    set: ({ set }, newValue) => {
        console.log(newValue);
        const minute = Number(newValue) * 60;
        set(minuteState, minute);
    },
});

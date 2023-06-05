import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

interface ToDo {
    text: string;
    id: number;
}

interface AddToDoAction {
    type: typeof ADD;
    text: string;
}

interface DeleteToDoAction {
    type: typeof DELETE;
    id: number;
}

type ActionType = AddToDoAction | DeleteToDoAction;

export const addToDo = (text: string) => {
    return {
        type: ADD,
        text,
    };
};

export const deleteToDo = (id: string) => {
    return {
        type: DELETE,
        id,
    };
};

const reducer = (state = [], action: ActionType) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((toDo: ToDo) => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;

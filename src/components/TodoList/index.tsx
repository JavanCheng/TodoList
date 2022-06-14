import { FC, ReactElement, useCallback, useReducer } from "react";
import TdInput from "./Input";
import { ACTION_TYPE, IState, ITodo } from "./interfaces";
import TdList from "./List";
import { todoReducer } from "./reducer";

const initialState: IState = {
    todoList: []
}

const TodoList: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = useCallback((todo: ITodo): void => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, [])

    const removeTodo = useCallback((id: number): void => {

    }, [])

    const toggleTodo = useCallback((id: number): void => {

    }, [])

    return (
        <>
            <TdInput
                addTodo={addTodo}
                todoList={state.todoList}
            />
            <TdList
                todoList={state.todoList}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </>
    )
}

export default TodoList;
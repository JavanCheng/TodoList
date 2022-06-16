import { FC, ReactElement, useCallback, useEffect, useReducer } from "react";
import TdInput from "./Input";
import { ACTION_TYPE, IState, ITodo } from "./interfaces";
import TdList from "./List";
import { todoReducer } from "./reducer";

// 惰性初始化，通过一个函数生成 initialState， 不执行就没有 state
function init(initTodoList: ITodo[]): IState {
    return {
        todoList: initTodoList,
    }
}

const TodoList: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todolist') || '');
        // 开发环境会 render 两次，影响初始化，故加判空条件解除影响
        if (todoList.length) {
            dispatch({
                type: ACTION_TYPE.INIT_TODOLIST,
                payload: todoList,
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(state.todoList));
    }, [state.todoList])

    const addTodo = useCallback((todo: ITodo): void => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, [])

    const removeTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }, [])

    const toggleTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
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
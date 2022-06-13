import { FC, ReactElement, useCallback, useReducer } from "react";
import Input from "./Input";
import { ACTION_TYPE, IState, ITodo } from "./interfaces";
import { todoReducer } from "./reducer";

const initialState: IState = {
    todoList: []
}

const TodoList: FC = (): ReactElement => {

    // const [todoList, setTodoList] = useState<ITodo[]>([])

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = useCallback((todo: ITodo) => {
        console.log(todo)
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
        // setTodoList(todoList => [...todoList, todo])
    }, [])

    return (
        <>
            <Input
                addTodo={addTodo}
                todoList={state.todoList}
            />
        </>
    )
}

export default TodoList;
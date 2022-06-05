import { FC, ReactElement, useCallback, useState } from "react";
import Input from "./Input";
import { ITodo } from "./interfaces";

const TodoList: FC = (): ReactElement => {

    const [todoList, setTodoList] = useState<ITodo[]>([])

    const addTodo = useCallback((todo: ITodo) => {
        setTodoList(todoList => [...todoList, todo])
    }, [])

    return (
        <>
            <Input
                addTodo={addTodo}
                todoList={todoList}
            />
        </>
    )
}

export default TodoList;
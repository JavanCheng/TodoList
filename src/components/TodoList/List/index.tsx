import { FC, ReactElement } from "react";
import { ITodo } from "../interfaces";
import TdItem from "./Item";
import "./index.css"

interface IProps {
    todoList: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({
    todoList,
    removeTodo,
    toggleTodo,
}): ReactElement => {
    return (
        <div className="todo-list">
            {
                todoList && todoList.map((todo: ITodo) => {
                    return (
                        <TdItem
                            key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                    )
                })
            }
        </div>
    )
}

export default TdList; 
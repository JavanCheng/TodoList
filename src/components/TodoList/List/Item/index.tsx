import { FC, ReactElement } from "react";
import { ITodo } from "../../interfaces";

interface IProps {
    todo: ITodo;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TdItem: FC<IProps> = ({
    todo,
    toggleTodo,
    removeTodo,
}): ReactElement => {
    const { id, content, completed } = todo;
    return (
        <div>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            <span
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {content}
            </span>
            <button onClick={() => removeTodo(id)}>清除</button>
        </div>
    )

}

export default TdItem;
import { FC, ReactElement } from "react";
import { ITodo } from "../../interfaces";
import './index.css';

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
        <div className="todo-item">
            <input
                type='checkbox'
                checked={completed}
                onChange={() => toggleTodo(id)}
                className="item-checkbox"
            />
            <span
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
                className="item-text"
            >
                {content}
            </span>
            <button onClick={() => removeTodo(id)} className="delete-button">删除</button>
        </div>
    )

}

export default TdItem;
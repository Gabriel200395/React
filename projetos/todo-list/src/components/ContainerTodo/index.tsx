import { ChangeEvent } from "react";
import "./styles.css";

interface propsTodo {
  id: string;
  title: string;
  done: boolean;
}

interface ContainerProps {
  todo: propsTodo[];
  handleCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleRemoveTodo: (id: string) => void;
}

export default function ContainerTodo({
  todo,
  handleCheck,
  handleRemoveTodo,
}: ContainerProps) {
  return (
    <div className="page-container-todo-list">
      {todo.map((todoItem) => {
        return (
          <div className="page-grid-todo-list" key={todoItem.id}>
            <div className="page-grid-todo-list-text">
              <input
                type="checkbox"
                defaultChecked={todoItem.done}
                onChange={(e) => handleCheck(e, todoItem.id)}
              />
              <p className={`${todoItem.done && "finished-task"}`}>
                {todoItem.title}
              </p>
            </div>
            <button
              onClick={() => handleRemoveTodo(todoItem.id)}
              data-testid="button-remove"
            >
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

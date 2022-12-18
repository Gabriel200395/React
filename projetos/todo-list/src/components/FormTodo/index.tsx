import { ChangeEvent } from "react";
import "./styles.css";

interface FormProps {
  todoField: string;
  handleChangeTodo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}

export default function FormTodo({
  todoField,
  handleChangeTodo,
  handleAddTodo,
}: FormProps) {
  return (
    <div className="page-container-input">
      <div className="page-grid-input">
        <input
          type="text"
          placeholder="Adicionar  Uma Tarefa"
          value={todoField}
          onChange={handleChangeTodo}
        />
          <button disabled={todoField ? false : true} onClick={handleAddTodo}>
            +
          </button>
      </div>
    </div>
  );
}

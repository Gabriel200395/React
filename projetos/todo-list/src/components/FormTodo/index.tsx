import { ChangeEvent } from "react";
import "./styles.css"

interface FormProps {
  todoField: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}

export default function FormTodo({
  todoField,
  handleChange,
  handleAddTodo,
}: FormProps) {
  return (
    <div className="page-container-input">
      <div className="page-grid-input">
        <input
          type="text"
          placeholder="Adicionar  Uma Tarefa"
          value={todoField}
          onChange={handleChange}
        />
        <button disabled={todoField ? false : true} onClick={handleAddTodo}>
          +
        </button>
      </div>
    </div>
  );
}

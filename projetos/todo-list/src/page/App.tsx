import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

type propsTodo = {
  id: string;
  title: string;
  done: boolean;
};

function App() {
  const [todo, setTodo] = useState<propsTodo[]>([
    { id: uuidv4(), title: "Ir na Padaria", done: false },
    { id: uuidv4(), title: "Ir no Mercado", done: false },
  ]);

  const [todoField, setTodoField] = useState("");

  function handleCheck(e: ChangeEvent<HTMLInputElement>, id: string) {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              done: e.target.checked,
            }
          : item
      )
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoField(e.target.value);

  function handleAddTodo() {
    setTodo([...todo, { id: uuidv4(), title: todoField, done: false }]);
    setTodoField("");
  }

  const handleRemoveTodo = (id: string) =>
    setTodo(todo.filter((todoItem) => todoItem.id !== id));

  return (
    <div className="page-container">
      <div className="header-grid-page">
        <div className="header-grid-title">
          <h2>Minhas Tarefas</h2>
        </div>
      </div>

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

      <div className="page-container-todo-list">
        {todo.map((todoItem) => {
          return (
            <div className="page-grid-todo-list" key={todoItem.id}>
              <div className="page-grid-todo-list-text">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheck(e, todoItem.id)}
                />
                <p className={`${todoItem.done && "finished-task"}`}>
                  {todoItem.title}
                </p>
              </div>
              <button onClick={() => handleRemoveTodo(todoItem.id)}>
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

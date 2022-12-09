import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import Form from "../components/FormTodo";
import ContainerTodo from "../components/ContainerTodo";

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
      <Form
        todoField={todoField}
        handleAddTodo={handleAddTodo}
        handleChange={handleChange}
      />

      <ContainerTodo
        todo={todo}
        handleCheck={handleCheck}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default App;

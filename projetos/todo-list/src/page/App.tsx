import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../components/FormTodo";
import ContainerTodo from "../components/ContainerTodo";
import Header from "../components/Header";

type propsTodo = {
  id: string;
  title: string;
  done: boolean;
};

function App() {
  const [todo, setTodo] = useState<propsTodo[]>([]);
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

  const handleRemoveTodo = (id: string) => {
    let removeTodo = todo.filter((todoItem) => todoItem.id !== id);
    localStorage.setItem("todo", JSON.parse(JSON.stringify(removeTodo)));
    setTodo(removeTodo);
  };

  function saveTodoStorage() {
    if (todo.length) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }

  function SearhTodoSaveStorage() {
    if (localStorage.getItem("todo")) {
      setTodo(JSON.parse(localStorage.getItem("todo") as string));
    }
  }
  useEffect(() => {
    saveTodoStorage();
  }, [todo]);

  useEffect(() => {
    SearhTodoSaveStorage();
  }, [localStorage.getItem("todo")]);

  return (
    <div className="page-container">
      <Header />
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

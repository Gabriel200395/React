import "./styles.css";

function App() {
  return (
    <div className="page-container">
      <div className="header-grid-page">
        <div className="header-grid-title">
          <h2>Minhas Tarefas</h2>
        </div>
      </div>

      <div className="page-container-input">
        <div className="page-grid-input">
          <input type="text" placeholder="Adicionar  Uma Tarefa" />
          <button>+</button>
        </div>
      </div>

      <div className="page-container-todo-list">
        <div className="page-grid-todo-list">
          <div className="page-grid-todo-list-text">
            <input type="checkbox" name="" id="" />
            <p>Descrição</p>
          </div>
          <button>
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

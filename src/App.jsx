import "./App.css";
import TodosProvider from "./components/todosProvider";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <TodosProvider>
      <div className="container">
        <h1 className="title">My ToDo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

export default App;

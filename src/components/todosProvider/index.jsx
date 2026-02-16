import TodosContext from "../../context/todosContext";
import { useState, useEffect } from "react";

function TodosProvider({ children }) {
  function getInitialTodos() {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos !== null) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }

  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
export default TodosProvider;

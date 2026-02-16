import styles from "./styles.module.css";
import { useContext } from "react";
import TodosContext from "../../context/todosContext";
import TodoItem from "../todoItem";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;

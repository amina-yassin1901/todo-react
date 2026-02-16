import { useContext } from "react";
import TodosContext from "../../context/todosContext";
import styles from "./styles.module.css";

function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useContext(TodosContext);

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span className={todo.completed ? styles.completed : ""}>
          {todo.text}
        </span>
      </div>

      <button className={styles.button} onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}
export default TodoItem;

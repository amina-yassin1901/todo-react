import { useState, useContext } from "react";
import TodosContext from "../../context/todosContext";
import styles from "./styles.module.css";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodosContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;

import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, delTodoFn, toggleTodoFn }) {
  return (
    <div className={`${styles.todoContainer} ${styles.unchecked}`}>
      <RiTodoFill className={styles.todoIcon} />

      <div className={styles.todoText}>{todo.text}</div>

      <RiDeleteBin2Line
        className={styles.deleteOneIcon}
        onClick={() => {
          delTodoFn(todo.id);
        }}
      />

      <FaCheck
        className={styles.checkIcon}
        onClick={(e) => {
          const todoContainer = e.target.closest(`.${styles.todoContainer}`);
          todoContainer.classList.toggle(styles.checked);
          toggleTodoFn(todo.id);
        }}
      />
    </div>
  );
}

export default Todo;

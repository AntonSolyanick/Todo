import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, index, delTodoFn, setCompltodosFn, complTodos }) {
  return (
    <div className={`${styles.todoContainer} ${styles.unchecked}`}>
      <RiTodoFill className={styles.todoIcon} />

      <div className={styles.todoText}>{todo}</div>

      <RiDeleteBin2Line
        className={styles.deleteOneIcon}
        onClick={(e) => {
          complTodos
            ? alert("this button works only when there is no checked todos")
            : delTodoFn(index);
          console.log(complTodos);
        }}
      />

      <FaCheck
        className={styles.checkIcon}
        onClick={(e) => {
          const todoContainer = e.target.closest(`.${styles.todoContainer}`);
          todoContainer.classList.toggle(styles.unchecked);
          todoContainer.classList.toggle(styles.checked);
          const complTodoNum = document.querySelectorAll(
            `.${styles.checked}`
          ).length;
          setCompltodosFn(complTodoNum);
        }}
      />
    </div>
  );
}

export default Todo;

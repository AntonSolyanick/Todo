import { RiDeleteBin2Line } from "react-icons/ri";
import styles from "../Todos/Todo.module.css";
import stylesButton from "./DeleteComplTodo.module.css";

function DeleteComplTodo({ setTodoArrFn, setCompltodosFn, title }) {
  return (
    <>
      <button
        className={stylesButton.deleteComplTodo}
        title={title}
        onClick={(e) => {
          const uncheckedTodos = [];
          const uncheckedTodosEl = document.querySelectorAll(
            `.${styles.unchecked}`
          );
          uncheckedTodosEl.forEach((content) =>
            uncheckedTodos.push(content.textContent)
          );
          document
            .querySelectorAll(`.${styles.todoContainer}`)
            .forEach((element) => {
              element.classList.remove(styles.checked);
            });
          document
            .querySelectorAll(`.${styles.todoContainer}`)
            .forEach((element) => element.classList.add(styles.unchecked));

          setTodoArrFn(uncheckedTodos);
          setCompltodosFn(0);
        }}
      >
        <RiDeleteBin2Line />
      </button>
    </>
  );
}

export default DeleteComplTodo;

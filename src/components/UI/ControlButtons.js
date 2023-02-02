import ResetButton from "./ResetButton";
import DeleteComplTodo from "./DeleteComplTodo";
import styles from "./ControlButtons.module.css";

function ControlButtons({ setTodoArrFn, setCompltodosFn }) {
  return (
    <div>
      <ResetButton
        setTodoArrFn={setTodoArrFn}
        setCompltodosFn={setCompltodosFn}
        title="delete all todos"
      />
      <DeleteComplTodo
        className={styles.deleteComplButton}
        setTodoArrFn={setTodoArrFn}
        setCompltodosFn={setCompltodosFn}
        title={"delete all checked todos"}
      />
    </div>
  );
}

export default ControlButtons;

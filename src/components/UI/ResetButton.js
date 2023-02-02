import { RiRefreshLine } from "react-icons/ri";
import styles from "./ResetButton.module.css";

function ResetButton({ setTodoArrFn, setCompltodosFn, title }) {
  return (
    <>
      <button
        className={styles.resetButton}
        title={title}
        onClick={() => {
          setTodoArrFn([]);
          setCompltodosFn(0);
        }}
      >
        <RiRefreshLine />
      </button>
    </>
  );
}

export default ResetButton;

import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./ControlButtons.module.css";

function ControlButtons({ setTodoArrFn, delComplTodoFn, existComplTodo }) {
  return (
    <div>
      <Button
        onClick={() => {
          setTodoArrFn([]);
        }}
        title="reset"
      >
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!existComplTodo}
        title="delete all checked todos"
        onClick={() => {
          delComplTodoFn();
        }}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default ControlButtons;

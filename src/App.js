import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import ControlButtons from "./components/UI/ControlButtons";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [complTodos, setCompltodos] = useState(0);

  function addTodoFn(string) {
    setTodoArr([...todoArr, string]);
  }
  function delTodoFn(index) {
    todoArr.splice(index, 1);
    setTodoArr([...todoArr]);
  }
  function setCompltodosFn(complTodoNum) {
    setCompltodos(complTodoNum);
  }
  const setTodoArrFn = function (arr) {
    setTodoArr(arr);
  };

  return (
    <>
      <h1>Todo app</h1>

      <TodoForm addTodoFn={addTodoFn} />

      {todoArr.length > 0 ? (
        <ControlButtons
          setCompltodosFn={setCompltodosFn}
          setTodoArrFn={setTodoArrFn}
        />
      ) : (
        <h3>Todo list is empty</h3>
      )}

      <TodoList
        todoArr={todoArr}
        delTodoFn={delTodoFn}
        complTodos={complTodos}
        setCompltodosFn={setCompltodosFn}
      />

      {complTodos > 0 ? <h3>You have compleated {complTodos} todo</h3> : ""}
    </>
  );
}

export default App;

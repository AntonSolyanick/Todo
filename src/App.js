import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import ControlButtons from "./components/Todos/ControlButtons";

function App() {
  const [todoArr, setTodoArr] = useState([]);

  const complTodosCount = todoArr.filter((todo) => todo.checked).length;

  function addTodoFn(string) {
    const newTodo = {
      text: string,
      checked: false,
      id: uuidv4(),
    };
    setTodoArr([...todoArr, newTodo]);
  }
  function delTodoFn(id) {
    setTodoArr(todoArr.filter((todo) => todo.id != id));
  }

  function setTodoArrFn(arr) {
    setTodoArr(arr);
  }
  function delComplTodoFn() {
    setTodoArr(todoArr.filter((todo) => !todo.checked));
  }
  function toggleTodoFn(id) {
    setTodoArr(
      todoArr.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
      )
    );
  }

  return (
    <>
      <h1>Todo app</h1>
      <TodoForm addTodoFn={addTodoFn} />

      {todoArr.length > 0 ? (
        <ControlButtons
          setTodoArrFn={setTodoArrFn}
          delComplTodoFn={delComplTodoFn}
          existComplTodo={!!complTodosCount}
        />
      ) : (
        <h3>Todo list is empty</h3>
      )}

      <TodoList
        todoArr={todoArr}
        delTodoFn={delTodoFn}
        toggleTodoFn={toggleTodoFn}
      />

      {complTodosCount > 0 && (
        <h3>
          {`You have compleated ${complTodosCount} ${
            complTodosCount > 1 ? "todos" : "todo"
          }`}
        </h3>
      )}
    </>
  );
}

export default App;

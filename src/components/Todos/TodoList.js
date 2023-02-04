import Todo from "./Todo";

function TodoList({ todoArr, delTodoFn, toggleTodoFn }) {
  return (
    <div>
      {todoArr.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            delTodoFn={delTodoFn}
            toggleTodoFn={toggleTodoFn}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

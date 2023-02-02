import Todo from "./Todo";

function TodoList({ todoArr, delTodoFn, setCompltodosFn, complTodos }) {
  return (
    <div>
      {todoArr.map((todo, i) => {
        return (
          <Todo
            key={i}
            index={i}
            todo={todo}
            delTodoFn={delTodoFn}
            complTodos={complTodos}
            setCompltodosFn={setCompltodosFn}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

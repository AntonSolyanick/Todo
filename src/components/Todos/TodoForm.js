import { useState } from "react";

function TodoForm({ addTodoFn }) {
  const [input, setInput] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="write your todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>

        <button
          title="submit"
          onClick={(e) => {
            e.preventDefault();
            if (input) {
              addTodoFn(input);
            }
            setInput("");
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default TodoForm;

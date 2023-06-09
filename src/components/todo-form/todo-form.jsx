import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";
import shortid from "shortid";

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: shortid(),
        label: task,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};

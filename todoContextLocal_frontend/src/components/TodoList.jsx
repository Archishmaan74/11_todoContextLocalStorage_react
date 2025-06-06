import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, toggleComplete, updateTodo } =
    useContext(TodoContext);

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 bg-gray-100 rounded"
        >
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.todo}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 font-bold"
            aria-label="Delete todo"
          >
            ❌
          </button>
          {/* <span className="flex items-center gap-2">
            <button
              onClick={() => handleUpdateTodo}
              className="text-blue-500 font-bold"
              aria-label="Edit todo"
            >
              ✏️
            </button>
            <span className="text-gray-400">|</span>
          </span> */}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

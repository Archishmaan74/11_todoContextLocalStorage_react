import { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, toggleComplete, updateTodo } =
    useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditedText(todo.todo);
  };

  const saveEdit = (id) => {
    if (editedText.trim()) {
      updateTodo(id, editedText.trim());
      setEditingId(null);
      setEditedText("");
    }
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 bg-gray-100 rounded"
        >
          <span
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer flex-1 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit(todo.id);
                }}
                className="border rounded px-2 py-1 w-full"
                autoFocus
              />
            ) : (
              todo.todo
            )}
          </span>

          <span className="flex items-center gap-2 ml-2">
            {editingId === todo.id ? (
              <button
                onClick={() => saveEdit(todo.id)}
                className="text-green-600 font-bold"
                title="Save"
              >
                💾
              </button>
            ) : (
              <button
                onClick={() => startEditing(todo)}
                className="text-blue-500 font-bold"
                title="Edit"
              >
                ✏️
              </button>
            )}
            <span className="text-gray-400">|</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 font-bold"
              title="Delete"
            >
              ❌
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

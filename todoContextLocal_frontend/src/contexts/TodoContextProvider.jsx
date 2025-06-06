import { useState } from "react";

function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);
  const addTodo = (todo) => {};
  const updateTodo = (todo) => {};
  const deleteTodo = (todo) => {};
  return (
    <>
      <TodoContext.Provider value={{ todo, addTodo, updateTodo, deleteTodo }}>
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default TodoContextProvider;

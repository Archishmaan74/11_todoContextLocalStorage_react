import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContextProvider";

const App = () => {
  return (
    <TodoContextProvider>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md p-6 rounded">
        <h1 className="text-2xl font-bold text-center mb-4">📝 Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContextProvider";

const App = () => {
  return (
    <TodoContextProvider>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGRqNHk0eTE3YmlsbmFjZ2xmZWo1eHpyYmx4aGkwNWhwcWg3YTZ3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b29IZK1dP4aWs/giphy.gif')`,
        }}
      >
        <div className="max-w-md mx-auto bg-gray-300 shadow-md p-6 rounded">
          <h1 className="text-2xl font-bold text-center mb-4">📝 Todo App</h1>
          <p className="text-center mb-2">
            You can add your todo tasks, mark them as completed, edit them, and
            delete them according to your needs!
          </p>
          <p className="text-center mb-2">
            <strong>
              No database integrated, just saving the todos through
              localstorage! Don't close window if u don't want to lose your
              todos!
            </strong>
          </p>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;

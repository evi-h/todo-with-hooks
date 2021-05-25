import UseLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

const InitialTodos = (initialTodos) => {
  const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuid(), task, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  };

  const editTodo = (id, task) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, task } : todo;
      })
    );
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  };
};

export default InitialTodos;

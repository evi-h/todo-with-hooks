import React, { createContext } from "react";
import useTodosState from "../hooks/useTodosState";

const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const todosFunc = useTodosState(initialTodos);

  return (
    <TodosContext.Provider value={todosFunc}>{children}</TodosContext.Provider>
  );
};

export default TodosProvider;

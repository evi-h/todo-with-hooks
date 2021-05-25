import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./componenets/todo-list/todo-list.component";
import TodoForm from "./componenets/todo-form/todo-form.component";
import useTodosState from "./hooks/useTodosState";
import TodosProvider from "./context/todos.context";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodosState(initialTodos);
  // const initialTodos = [
  //   { id: 1, task: "clean", completed: false },
  //   { id: 2, task: "wash", completed: true },
  //   { id: 3, task: "grow beard", completed: false },
  // ];

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              remove={removeTodo}
              toggle={toggleTodo}
              edit={editTodo}
            />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

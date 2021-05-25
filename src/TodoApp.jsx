import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./componenets/todo-list/todo-list.component";
import TodoForm from "./componenets/todo-form/todo-form.component";
import uuid from "uuid/v4";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "clean", completed: false },
    { id: 2, task: "wash", completed: true },
    { id: 3, task: "grow beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

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
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            remove={removeTodo}
            toggle={toggleTodo}
            edit={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

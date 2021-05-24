import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./componenets/todo-list/todo-list.component";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "clean", completed: false },
    { id: 2, task: "wash", completed: true },
    { id: 3, task: "grow beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

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
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;

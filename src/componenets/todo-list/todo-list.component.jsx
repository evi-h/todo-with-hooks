import React from "react";
import { List, Paper, Divider } from "@material-ui/core";
import Todo from "../Todo/todo.component";

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;

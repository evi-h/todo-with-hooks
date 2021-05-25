import React from "react";
import { List, Paper, Divider } from "@material-ui/core";
import Todo from "../Todo/todo.component";

const TodoList = ({ todos, remove, toggle }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo {...todo} key={todo.id} remove={remove} toggle={toggle} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
